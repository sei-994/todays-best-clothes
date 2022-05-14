<template>
  <!-- :weather-number="weatherIndex" -->
  <div class="weather__container contents__box">
    <Weather />
    <WeeksWeather />
  </div>
</template>

<script>
import Weather from "../components/Weather.vue";
import WeeksWeather from "../components/WeeksWeather.vue";
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    Weather,
    WeeksWeather,
  },
  data() {
    return {};
  },

  created() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "tnql-coords-trial-v2.p.rapidapi.com",
        "X-RapidAPI-Key": "97de04ed9emshfd77a75f4fbc4d7p13d043jsnd5d10b854251",
      },
    };

    fetch(
      "https://tnql-coords-trial-v2.p.rapidapi.com/v2/api/coords_trial?airport=NRT",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        const First = response.results.a;
        // const Second = response.results.b;
        // const Third = response.results.c;

        // それぞれa.b.cをクラスに追加
        First.forEach((element) => {
          const firstDetails = {
            weather: element.description1,
            image: element.image,
            comment: element.description3,
          };
          console.log(firstDetails);
        });
      })

      .catch((err) => console.error(err));
  },
};
</script>
<style lang="scss" scoped>
.weather__container {
  display: flex;
  border: 1px solid black;
  border-radius: 40px;
}
</style>
