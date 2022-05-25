<template>
  <div class="weeks-weather__container">
    <div class="weeks-weather__inner">
      <div class="voting__box">
        <div class="icon__box">
          <img src="../../public/img/weeks-weather-icon/sunny-icon.png" alt="" srcset="" />
        </div>
        <div class="icon__box">
          <img src="../../public/img/weeks-weather-icon/cloud-icon.png" alt="" srcset="" />
        </div>
        <div class="icon__box">
          <img src="../../public/img/weeks-weather-icon/rain-icon.png" alt="" srcset="" />
        </div>
        <div class="icon__box">
          <img src="../../public/img/weeks-weather-icon/sunder-icon.png" alt="" srcset="" />
        </div>
      </div>
      <div class="perday-weather__contaienr">
        <div
          class="perday-weather__box"
          v-for="(weatherEl, index) in weakWeatherLists"
          :key="index"
        >
          <div class="detail__box">
            <a>{{ weatherEl.day }}</a>
            <img alt="読み込みません" :src="weatherEl.weather" class="perday__icon" />
            <div class="temp__detail">
              <a>{{ weatherEl.min_temp }}℃</a>/<a>{{ weatherEl.max_temp }}℃</a>
            </div>
            <a> {{ weatherEl.pop }}% </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getWeeksWeather } from "../lib/weeksweather.js";

export default {
  name: "WeeksWeather",
  data() {
    return {
      weakWeatherLists: [],
    };
  },

  created: async function () {
    let queltemp;
    await getWeeksWeather().then((result) => {
      result.forEach((m) => {
        m.max_temp = Math.floor(m.max_temp);
        m.min_temp = Math.floor(m.min_temp);
        m.day = m.day.substring(5).replace("-", "/"); //日付の処理
        if (Number(m.weather) < 233) {
          //sunder
          m.weather = require("../../public/img/thunder.png");
        } else if (Number(m.weather) < 322) {
          m.weather = require("../../public/img/weeks-weather-icon/rain-icon.png"); //雨
        } else if (Number(m.weather) < 505) {
          m.weather = require("../../public/img/weeks-weather-icon/rain-sun.png"); //晴れ雨も含め
        } else if (Number(m.weather) == 511) {
          //雪のような雨
          m.weather = require("../../public/img/weeks-weather-icon/freezing-rain.png"); //雨
        } else if (Number(m.weather) < 532) {
          m.weather = require("../../public/img/weeks-weather-icon/rain-icon.png"); //雨
        } else if (Number(m.weather) < 623) {
          m.weather = require("../../public/img/weeks-weather-icon/snow-icon.png");
        } else if (Number(m.weather) < 782) {
          m.weather = require("../../public/img/weeks-weather-icon/fog.png"); //霧
        } else if (Number(m.weather) == 800) {
          m.weather = require("../../public/img/weeks-weather-icon/sunny-icon.png"); //快晴
        } else if (Number(m.weather) < 805) {
          m.weather = require("../../public/img/weeks-weather-icon/cloud-sun.png"); //曇りメイン
        }
        this.weakWeatherLists.push(m);
      });
      this.weakWeatherLists.shift();
      this.weakWeatherLists.splice(6);
    });

    console.log(queltemp);

    // if (queltemp.area === "Asia/Tokyo") {
    //   this.city = "TOKYO";
    // }
  },
};
</script>

<style lang="scss" scoped>
* {
  z-index: 2;
}

h3 {
  font-size: 2.5rem;
}
p {
  font-size: 1.8rem;
}
.weeks-weather__container {
  width: 100%;
  border-radius: 0.8rem;
  opacity: 0.85;
  margin: 50px auto;
  z-index: 10;
  font-family: "HanziPen TC", sans-serif;
  border: 1px solid black;
  border-radius: 40px;
  margin: 3%;
}
.weeks-weather__inner {
  max-width: 33rem;
  margin: 0 auto;
}
.voting__box {
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  .icon__box {
    border: gray 1px solid;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    margin: 0 3%;
    &:first-child {
      margin-left: 2rem;
    }
    &:last-child {
      margin-right: 2rem;
    }
    img {
      width: 80%;
      height: 80%;
    }
  }
}

.perday-weather__contaienr {
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
}
.perday-weather__box {
  min-width: 3rem;
  margin: 0 auto;
  position: relative;
  display: inline-block;
  &:after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 40px;
    background-color: gray;
    position: absolute;
    top: 18px;
    right: -13px;
  }
  &:last-child {
    &::after {
      display: none;
    }
  }
}
.perday__icon {
  margin: 0 auto;
  width: 2rem;
  height: 2rem;
}
.detail__box {
  display: flex;
  flex-direction: column;
}
.temp__detail {
  font-size: 1rem;
}
</style>
