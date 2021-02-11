const request = require("request");

const catUrl = "https://api.thecatapi.com/v1/breeds/search/?q=";

const fetchBreedDescription = (breedName, callback) => {
  request(catUrl + breedName, (error, response, body) => {
    if (error) {
      callback("ERROR!", null);
      return;
    }
    const data = JSON.parse(body);
    if (data[0] && data[0].description) {
      callback(null, data[0].description);
    } else {
      callback("Can't find that cat", null);
    }
  });
};


module.exports = { fetchBreedDescription };