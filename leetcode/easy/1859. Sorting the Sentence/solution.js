// Solution
/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = (s) =>
  s
    .split(" ")
    .sort((a, b) => +a[a.length - 1] - +b[b.length - 1])
    .map((word) => word.slice(0, -1))
    .join(" ");

// Test examples
console.log(sortSentence("is2 sentence4 This1 a3")); // prints: This is a sentence
console.log(sortSentence("Myself2 Me1 I4 and3")); // prints: Me Myself and I
