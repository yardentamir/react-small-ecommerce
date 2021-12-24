const axios = require("axios").default;

const options = {
  method: "GET",
  url: "https://nike-products.p.rapidapi.com/shoes/men-shoes",
  headers: {
    "x-rapidapi-host": "nike-products.p.rapidapi.com",
    "x-rapidapi-key": "324986073amsheb4b1761cee33bap1a6db6jsn26e8c3131db9",
  },
};

export default class api {
  static getItems = async () => {
    return await axios
      .request(options)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  };
}
