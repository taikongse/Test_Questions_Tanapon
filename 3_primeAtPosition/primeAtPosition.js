function primeAt(n) {
  // Initialize an array to store primes
  let primes = [2];
  let num = 3;

  while (primes.length < n) {
    // Check if num is prime
    let isPrime = true;
    for (let i = 0; primes[i] <= Math.sqrt(num); i++) {
      if (num % primes[i] === 0) {
        isPrime = false;
        break;
      }
    }
    // If num is prime, add it to the array of primes
    if (isPrime) {
      primes.push(num);
    }
    num++;
  }

  return primes[n - 1];
}

console.time("primeAt2000");
console.log(primeAt(2000)); // => 17389
console.timeEnd("primeAt2000");

console.time("primeAt50000");
console.log(primeAt(50000)); // => 611953
console.timeEnd("primeAt50000");

console.time("primeAt1000000");
console.log(primeAt(1000000)); // => 15485863
console.timeEnd("primeAt1000000");

console.time("primeAt20000000");
console.log(primeAt(20000000)); // => 373587883
console.timeEnd("primeAt20000000");
