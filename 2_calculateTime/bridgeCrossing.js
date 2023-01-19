// Calculate the total time to cross the bridge
function calculateTime(person1, person2) {
  return Math.max(person1, person2);
}

// Array of the four people
let people = ["A", "B", "C", "D"];

// The time taken by each person
let times = {
  A: 1,
  B: 2,
  C: 5,
  D: 8,
};

//  Track of the total time
let totalTime = 0;

// The current pair of people crossing the bridge
let pair = [];

let order = [];

// While there are still people left to cross the bridge
while (people.length > 0) {
  // Sort the people array by the time taken to cross the bridge
  people.sort((a, b) => times[a] - times[b]);

  // Take the first two people from the array
  pair = people.slice(0, 2);

  // Remove the pair from the people array
  people = people.slice(2);

  // Add the time taken by the pair to the total time
  totalTime += calculateTime(times[pair[0]], times[pair[1]]);

  order.push(pair);
}

console.log(order);
console.log(totalTime);
