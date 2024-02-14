// It would be much better to break the test into multiple it blocks with clearly written inputs and outputs.

// Like this:

// describe("Raises x to power n", function() {
//   it("5 in the power of 1 equals 5", function() {
//     assert.equal(pow(5, 1), 5);
//   });

//   it("5 in the power of 2 equals 25", function() {
//     assert.equal(pow(5, 2), 25);
//   });

//   it("5 in the power of 3 equals 125", function() {
//     assert.equal(pow(5, 3), 125);
//   });
// });
// We replaced the single it with describe and a group of it blocks. Now if something fails we would see clearly what the data was.

// Also we can isolate a single test and run it in standalone mode by writing it.only instead of it:

// describe("Raises x to power n", function() {
//   it("5 in the power of 1 equals 5", function() {
//     assert.equal(pow(5, 1), 5);
//   });

//   // Mocha will run only this block
//   it.only("5 in the power of 2 equals 25", function() {
//     assert.equal(pow(5, 2), 25);
//   });

//   it("5 in the power of 3 equals 125", function() {
//     assert.equal(pow(5, 3), 125);
//   });
// });