/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  return () => n++;
};

// Test examples
const testFunction = createCounter(10);
console.log(testFunction()); // prints: 10
console.log(testFunction()); // prints: 11
console.log(testFunction()); // prints: 12
