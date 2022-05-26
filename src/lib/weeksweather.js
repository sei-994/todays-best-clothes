import { getLocation } from "./location.js";

export const getWeeksWeather = async () => {
  // let ownApiKey = process.env.VUE_APP_WEATHER_API_KEY;
  // TODO lat,lon =undefined
  let ownURL =
    "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lat=35.681283&lon=139.766092";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
      "X-RapidAPI-Key": "97de04ed9emshfd77a75f4fbc4d7p13d043jsnd5d10b854251",
    },
  };
  getLocation().then(() => {});
  const weeksWeatherArray = [];
  const dayWeatherObject = function (day, max_temp, min_temp, pop, weather) {
    (this.day = day),
      (this.max_temp = max_temp),
      (this.min_temp = min_temp),
      (this.pop = pop),
      (this.weather = weather);
  };
  const result = await fetch(ownURL, options)
    .then((response) => response.json())
    .then((res) => {
      res.data.forEach((info) => {
        const dayweather = new dayWeatherObject(
          info.datetime,
          info.max_temp,
          info.min_temp,
          info.pop,
          info.weather.code
        );
        weeksWeatherArray.push(dayweather);
      });
      return weeksWeatherArray;
    });

  return result;
};
