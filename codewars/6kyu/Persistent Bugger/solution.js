// Solution
function persistence(num) {
  // Initialize counter
  let counter = 0;
  // If the given number is already a single digit return 0
  if (num < 10) return counter;
  // Otherwise while the number isn't single digit
  while (num > 9) {
    // Calculate the product of all digits of the number
    num = num
      .toString()
      .split("")
      .reduce((acc, x) => +acc * +x);
    // Increase counter
    counter++;
  }
  return counter;
}

// Test examples
console.log(persistence(39)); // prints: 3
console.log(persistence(999)); // prints: 4
console.log(persistence(4)); // prints: 0
