const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it('returns "Breed not found!" for non-existent breed, via callback', (done) => {
    fetchBreedDescription('Sberian', (err, desc) => {
      assert.equal(err, null);

      const expectedMessage = "Breed not found!";

      // compare returned description
      assert.equal(expectedMessage, desc.trim());

      done();
    });
  });
});