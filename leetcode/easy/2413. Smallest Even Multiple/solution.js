// Solution
/**
 * @param {number} n
 * @return {number}
 */
 var smallestEvenMultiple = function(n) {
  return n % 2 == 0 ? n : n*2;
};

// Test examples
console.log(smallestEvenMultiple(1)); // prints: 2
console.log(smallestEvenMultiple(2)); // prints: 2
console.log(smallestEvenMultiple(3)); // prints: 6
console.log(smallestEvenMultiple(4)); // prints: 4
console.log(smallestEvenMultiple(5)); // prints: 10
console.log(smallestEvenMultiple(10)); // prints: 10