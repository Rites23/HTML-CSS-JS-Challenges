// Write a function `pickPrimes` that accepts an array of numbers as an argument. The function should
// return an array containing only the prime numbers. A prime number is a number that is
// only divisible by 1 and itself. The smallest prime number is 1.

function pickPrimes(numbers) {
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  const primes = [];
  for (let num of numbers) {
    if (isPrime(num)) {
      primes.push(num);
    }
  }
  return primes;
}

console.log(pickPrimes([12, 3, 7, 18, 11])); // [3, 7, 11]
console.log(pickPrimes([17, 23, 9, 42])); // [17, 23]
console.log(pickPrimes([4, 2048, 100, 55])); // []
