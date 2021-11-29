// Solution
function spinWords(str) {
  return str
    .split(" ")
    .map((x) => {
      if (x.length >= 5) {
        return x.split("").reverse().join("");
      }
      return x;
    })
    .join(" ");
}

// Test examples
console.log(spinWords("Hey fellow warriors")); // prints: Hey wollef sroirraw
console.log(spinWords("This is a test")); // prints: This is a test
console.log(spinWords("This is another test")); // prints: This is rehtona test
