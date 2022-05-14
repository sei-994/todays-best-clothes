import { getLocation } from "./location.js";
// import { getCurrentPosition } from "./location.js";

export const getWeather = async () => {
  //openweathermap（天気予報API）に接続

  // getWeather();
  // let ownApiKey = process.env.VUE_APP_WEATHER_API_KEY
  let ownApiKey = "093ec620120a85e6e04c7e6243bda70c";
  // TODO lat,lon =undefined
  console.log(process.env.VUE_APP_WEATHER_API_KEY);
  let ownURL =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    35.681283 +
    "&lon=" +
    139.766092 +
    "&exclude=hourly,minutely&appid=" +
    ownApiKey +
    "";
  // 35.681283 lat
  // 139.766092 lon
  getLocation().then(() => {});
  const result = await fetch(ownURL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const lat = data.lat;
      const lon = data.lon;
      const weather = data.daily[0].weather;
      const area = data.timezone;
      const morning = data.daily[0].feels_like.morn;
      const evening = data.daily[0].feels_like.eve;
      const night = data.daily[0].feels_like.night;

      const WeatherObject = {
        lat: lat,
        lon: lon,
        weather: weather,
        area: area,
        morning: morning,
        evening: evening,
        night: night,
      };
      return WeatherObject;
    });

  return result;
};

// export const getTemperature = async () => {
//   const latAndLng = await getLocation().then((result) => {
//     return result;
//   });
//   const temperatureInDay = await getWeather(latAndLng.lat, latAndLng.lng).then((result) => {
//     return result;
//   });
//   return temperatureInDay;
// };
