const request = require("request");

const fetchBreedDescription = function(url, callback) {
  request(url, (error, response, body) => {
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
