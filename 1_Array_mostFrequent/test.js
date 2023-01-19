const assert = require("assert");
const mostFrequent = require("../1_Array_mostFrequent/index");

assert.deepEqual(mostFrequent([6, -1, 6, 3, 3, 6, 5, 6, 6, 7]), {
  result: 6,
  count: 5,
});
assert.deepEqual(mostFrequent([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), {
  result: 1,
  count: 1,
});
assert.deepEqual(mostFrequent([1, 1, 1, 1, 2, 2, 2, 3, 3, 3]), {
  result: 1,
  count: 4,
});
assert.deepEqual(mostFrequent([-1, -1, -1, 0, 0, 0, 1, 1, 1]), {
  result: -1,
  count: 3,
});
console.log("All test cases pass");
