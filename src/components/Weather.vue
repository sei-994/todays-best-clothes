<template>
  <div id="weather" class="container">
    <div class="flame">
      <h3>Today's weather</h3>
      <div class="weather__city">{{ city }}</div>

      <div class="imgBox">
        <img alt="読み込みません" :src="weatherImage" />
      </div>
      <div class="weather__description__box">
        <div class="weather__description">{{ weather }}</div>
        <div class="weather__temperature">{{ temperature }}℃</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getWeather } from "../lib/weather.js";

export default {
  name: "Weather",
  //   props: {
  //     weatherNumber: {
  //       required: true,
  //     },
  //   },
  data() {
    return {
      show: true,
      city: [],
      weather: [],
      temperature: [],
      weatherNumber: "",
    };
  },
  computed: {
    weatherImage() {
      if (this.weatherNumber == "Clear") {
        return "/img/sun.png"; //晴れ
      } else if (this.weatherNumber == "Clouds") {
        return "/img/nuage.png"; //曇り
      } else if (this.weatherNumber == "Drizzle") {
        return "/img/rain.png"; //曇り
      } else if (this.weatherNumber == "Rain") {
        return "/img/rain.png"; //雨
      } else if (this.weatherNumber == "Snow") {
        return "/img/snow.png"; //雪
      } else if (this.weatherNumber == "thunder") {
        return "/img/thunder.png"; //雷
      }
      return "";
    },
  },
  // TODO async/await記述削除 7/19
  created: async function () {
    let queltemp;
    // TODO 外部jsから取れない問題解決→↓のgetweather()がgetTemperatureになってた
    await getWeather().then((result) => {
      queltemp = result;
    });
    console.log(queltemp);
    this.weatherNumber = queltemp.weather[0].main;
    this.weather = queltemp.weather[0].main;
    this.city = queltemp.area;
    this.temperature = Math.round(queltemp.night) - 271;

    if (queltemp.area === "Asia/Tokyo") {
      this.city = "TOKYO";
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  border-radius: 0.8rem;
  opacity: 0.85;
  margin: 50px auto;
  z-index: 10;
  font-family: "HanziPen TC", sans-serif;
}
p {
  font-size: 1.8rem;
}
.imgBox {
  display: flex;
  justify-content: center;
}
h3 {
  font-size: 2.5rem;
  font-weight: lighter;
}
.weather__city {
  font-size: 2rem;
  font-weight: lighter;
}
.weather__description__box {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  font-size: 3vw;
  div {
    margin: 0 1.2rem;
  }
}
</style>
