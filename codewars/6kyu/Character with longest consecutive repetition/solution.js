// Solution
function longestRepetition(s) {
  var res = ["", 0];
  var accCount = 0;
  var accChar = "";

  // Iterate over the string
  for (var i = 0; i < s.length; i++) {
    var currentChar = s.charAt(i);
    // If the current character is not equal to the one previously watched
    // (stored in accChar)
    if (currentChar !== accChar) {
      // If the current count of the previously watched character is higher
      // than the currently saved one, save the new maximum to the result
      if (accCount > res[1]) {
        res = [accChar, accCount];
      }
      accChar = currentChar;
      accCount = 1;
      // If the character is the same as before, increase it's count
    } else accCount++;
  }
  // After iterating over the string check whether the last watched
  // character has a new maximum count
  if (accCount > res[1]) {
    res = [accChar, accCount];
  }
  return res;
}

// Test examples
console.log(longestRepetition("")); // prints: ['',0]
console.log(longestRepetition("ba")); // prints: ['b',1]
console.log(longestRepetition("aaaabb")); // prints: ['a',4]
console.log(longestRepetition("abbbbb")); // prints: ['b',5]
console.log(longestRepetition("bbbaaabaaaa")); // prints: ['a',4]
