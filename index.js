const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2].toString();

const callback = function(error, desc) {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
};

fetchBreedDescription(breedName, callback);

