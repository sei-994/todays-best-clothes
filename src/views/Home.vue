<template>
  <!-- :weather-number="weatherIndex" -->
  <div class="weather__container contents__box">
    <Weather />
    <WeeksWeather />
  </div>
  <div class="clothes__container contents__box">
    <Clothes />
  </div>
</template>

<script>
import Weather from "../components/Weather.vue";
import Clothes from "../components/Clothes.vue";
import WeeksWeather from "../components/WeeksWeather.vue";
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    Weather,
    WeeksWeather,
    Clothes,
  },
  data() {
    return {};
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
