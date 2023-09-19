/**
 * @return {Function}
 */
var createHelloWorld = function () {
  return (...args) => "Hello World";
};

// Test examples
const testFunction = createHelloWorld();
console.log(testFunction()); // prints: Hello World
console.log(testFunction({}, null, 42)); // prints: Hello World
