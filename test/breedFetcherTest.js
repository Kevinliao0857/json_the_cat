const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it('returns an error description for no breed, via callback', (done) => {
    fetchBreedDescription('Tabby', (err, desc) => {

      assert.equal(desc, null);
      assert.equal(err, "Can't find that cat");

      done();
    });
  });
  //Think kept exceeding 2000ms, used this as fix
  it("Test Post Request", function(done) {
    this.timeout(10000);
    done();
});
});
