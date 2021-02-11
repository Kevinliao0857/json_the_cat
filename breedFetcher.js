const breedName = process.argv[2];

const request = require("request");


const cat_url = "https://api.thecatapi.com/v1/breeds/search/?q=";


request(cat_url + breedName, (error, response, body) => {
  if (error) {
    console.log("ERROR!");
  } else if (response.statusCode !== 200) {
    console.log("Everything did not go great :( ");
  }

  const data = JSON.parse(body);
  if (data[0] && data[0].description) {
    console.log(data[0].description);
  } else {
    console.log("Can't find that cat");
  }
});

