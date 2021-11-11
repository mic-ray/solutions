// Solution
const compose =
  (...fn) =>
  (s) =>
    fn.reduceRight((acc, x) => x(acc), s);

// Text examples
const addOne = (a) => a + 1;
const multTwo = (b) => b * 2;

console.log(compose(multTwo, addOne)(5)); // prints: 12
console.log(compose(addOne, multTwo, addOne, addOne)(2)); // prints: 9
console.log(compose(addOne)(3)); // prints: 4
console.log(compose()(10)); // prints: 10
