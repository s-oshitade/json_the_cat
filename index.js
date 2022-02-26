const { fetchBreedDescription } = require('./breedFetcher');

const url = `https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2].toString()}`;

const callback = function(error, desc) {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
};

fetchBreedDescription(url, callback);

