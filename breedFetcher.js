const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    let description = data[0].description;
    if (data.length === 0) {
      callback("Breed not found!");
      return;
    } else {
      callback(null, description);
    }
  });
};

module.exports = { fetchBreedDescription };
