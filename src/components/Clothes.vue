<template>
  <div id="clothes">
    <div class="left">
      <h3>Today's Best Clothes?</h3>
      <div class="clipping-container">
        <div class="forward-arrow arrow" @click="forward"></div>
        <div class="backward-arrow arrow" @click="backward"></div>
        <div class="pages" :style="{ left: currentLeft }">
          <div
            class="page"
            v-for="(today, index) in recommendLists.todayList"
            :key="index"
            v-show="currentRecommendIndex == 1"
          >
            <div class="comment__box weather-comment">{{ today.weather }}</div>

            <img :src="today.image" alt="" />
            <div class="comment__box">{{ today.comment }}</div>
          </div>
          <div
            class="page"
            v-for="(today, index) in recommendLists.tomorrowList"
            :key="index"
            v-show="currentRecommendIndex == 2"
          >
            <div class="comment__box weather-comment">{{ today.weather }}</div>

            <img :src="today.image" alt="" />
            <div class="comment__box">{{ today.comment }}</div>
          </div>
          <div
            class="page"
            v-for="(today, index) in recommendLists.afterTomorrowList"
            :key="index"
            v-show="currentRecommendIndex == 3"
          >
            <div class="comment__box weather-comment">{{ today.weather }}</div>

            <img :src="today.image" alt="" />
            <div class="comment__box">{{ today.comment }}</div>
          </div>
        </div>
      </div>
      <div class="dots">
        <span
          v-for="index in totalPage"
          :class="{ dot: true, 'dot-current': isCurrentPage(index) }"
          :key="index"
        ></span>
      </div>
    </div>
    <div class="select-day__box">
      <div @click="today">→today</div>
      <div @click="tomorrow">→tomorrow</div>
      <div @click="afterTomorrow">→after tomorrow</div>
    </div>
    <div class="cafe right">
      <img src="../../public/img/cafe.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Clothes",
  data() {
    return {
      currentPage: 1,
      totalPage: 3,
      pageWidth: 372, //img240pxなら372px移動させる必要がある
      clothIndex: 0,
      currentRecommendIndex: 1, //服装提案(今日or 明日 or 明後日)
      recommendLists: {
        todayList: [],
        tomorrowList: [],
        afterTomorrowList: [],
      },
    };
  },
  methods: {
    forward() {
      if (this.currentPage === this.totalPage) {
        return;
      }
      this.currentPage += 1;
      console.log(this.currentPage);
    },
    backward() {
      if (this.currentPage === 1) {
        console.log(-1);
        return;
      }
      console.log(1);

      this.currentPage -= 1;
    },
    pageToPosition() {
      return -this.pageWidth * (this.currentPage - 1);
    },
    isCurrentPage(page) {
      return this.currentPage === page;
    },
    today() {
      if (!this.currentRecommendIndex == 1) {
        return;
      }
      this.currentRecommendIndex = 1;
    },
    tomorrow() {
      if (!this.currentRecommendIndex == 2) {
        return;
      }
      this.currentRecommendIndex = 2;
    },
    afterTomorrow() {
      if (!this.currentRecommendIndex == 3) {
        return;
      }
      this.currentRecommendIndex = 3;
    },
  },
  computed: {
    currentLeft() {
      return String(this.pageToPosition()) + "px";
    },
  },
  created() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "tnql-coords-trial-v2.p.rapidapi.com",
        "X-RapidAPI-Key": "97de04ed9emshfd77a75f4fbc4d7p13d043jsnd5d10b854251",
      },
    };
    fetch("https://tnql-coords-trial-v2.p.rapidapi.com/v2/api/coords_trial?airport=NRT", options)
      .then((response) => response.json())
      .then((response) => {
        const Today = response.results.a;
        const Tommorow = response.results.b;
        const AfterTommorow = response.results.c;

        // それぞれa.b.c(今日・明日・明後日)をクラスに追加
        Today.forEach((element) => {
          const todayDetails = {
            weather: element.description1,
            image: element.image,
            comment: element.description3,
          };
          this.recommendLists.todayList.push(todayDetails);
        });
        Tommorow.forEach((element) => {
          const tommorowDetails = {
            weather: element.description1,
            image: element.image,
            comment: element.description3,
          };
          this.recommendLists.tomorrowList.push(tommorowDetails);
        });
        AfterTommorow.forEach((element) => {
          const afterTommorowDetails = {
            weather: element.description1,
            image: element.image,
            comment: element.description3,
          };
          this.recommendLists.afterTomorrowList.push(afterTommorowDetails);
        });
      })
      .catch((err) => console.error(err));
  },
};
</script>

<style lang="scss" scoped>
#clothes {
  margin-top: 5rem;
  font-family: "HanziPen TC", sans-serif;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.left {
  margin-left: 5%;
}
h3 {
  font-size: 2rem;
}
.clipping-container {
  clip-path: inset(0);
  position: relative;
  height: 33rem;
  width: 24rem;
  display: inline-block;
}
.pages {
  display: flex;
  /* ここにtransitionをつけることでpagesのleftを変更した場合にアニメーションさせることができる */
  transition: left 0.5s ease;
  position: absolute;
  left: 0;
}
.page {
  width: 24rem;
  height: 24rem;
  border: 1px solid white;
  box-sizing: border-box;
  img {
    height: 24rem;
    width: 24rem;
  }
  .comment__box {
    width: 20rem;
    margin: 0 auto;
  }
  .weather-comment {
    margin: 1rem auto;
  }
}
.dots {
  width: 30px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 16px;
}
.dot {
  height: 8px;
  width: 8px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
.dot-current {
  background-color: skyblue;
}
.arrow {
  cursor: pointer;
}
.forward-arrow {
  position: absolute;
  right: 2rem;
  z-index: 10;
  top: 14rem;
  border-top: solid 4px #84ecff;
  border-right: solid 4px #84ecff;
  width: 24px;
  height: 24px;
  transform: rotate(45deg);
}
.backward-arrow {
  position: absolute;
  left: 2rem;
  z-index: 10;
  top: 14rem;
  border-top: solid 4px #84ecff;
  border-left: solid 4px #84ecff;
  width: 24px;
  height: 24px;
  transform: rotate(-45deg);
}
.select-day__box {
  margin: auto;
  div {
    cursor: pointer;
    font-size: 1.4rem;
    white-space: nowrap;

    border-bottom: 1px solid gray;
    padding: 1rem;
    opacity: 0.7;
    background: rgb(202, 232, 251);
  }
}
.cafe {
  img {
    margin-top: 4rem;
    width: 35rem;
    height: 35rem;
    // position: absolute;
    z-index: 2;
    // bottom: -30rem;
    // right: -3rem;
  }
}
</style>
