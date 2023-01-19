function mostFrequent(arr) {
  let map = new Map();
  let maxCount = 0;
  let result;
  for (let i of arr) {
    if (map.has(i)) {
      let count = map.get(i);
      map.set(i, count + 1);
    } else {
      map.set(i, 1);
    }
    if (map.get(i) > maxCount) {
      maxCount = map.get(i);
      result = i;
    }
  }
  return { result: result, count: maxCount };
}

module.exports = mostFrequent;

console.log(mostFrequent([6, -1, 6, 3, 3, 6, 5, 6, 6, 7]));
