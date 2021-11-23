// Solution

/**
 * @param {character[]} s
 * @return {character[]} The reversed string
 */
var reverseString = function (s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }
  return s;
};

// Test examples
console.log(reverseString(["h", "e", "l", "l", "o"])); // prints: [ 'o', 'l', 'l', 'e', 'h' ]
console.log(reverseString(["H", "a", "n", "n", "a", "h"])); // prints: [ 'h', 'a', 'n', 'n', 'a', 'H' ]
