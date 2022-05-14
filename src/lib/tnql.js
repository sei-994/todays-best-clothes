const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "tnql-coords-trial-v2.p.rapidapi.com",
    "X-RapidAPI-Key": "97de04ed9emshfd77a75f4fbc4d7p13d043jsnd5d10b854251",
  },
};

// const BestClothes = class BestClothes {
//   constuctor(weather, image, comment) {
//     this.weather = weather;
//     this.image = image;
//     this.comment = comment;
//   }
// };
fetch(
  "https://tnql-coords-trial-v2.p.rapidapi.com/v2/api/coords_trial?airport=NRT",
  options
)
  .then((response) => response.json())
  .then(
    (response) => console.log(response.results)
    // response.results.forEach(element => {

    // });
    //   const first = new BestClothes()
  )

  .catch((err) => console.error(err));
