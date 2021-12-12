// Solution
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = function (s, indices) {
  res = [];
  for (let i = 0; i < indices.length; i++) {
    res[indices[i]] = s[i];
  }
  return res.join("");
};

// Test examples
console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3])); // prints: leetcode
console.log(restoreString("abc", [0, 1, 2])); // prints: abc
console.log(restoreString("aiohn", [3, 1, 4, 2, 0])); // prints: nihao
console.log(restoreString("aaiougrt", [4, 0, 2, 6, 7, 3, 1, 5])); // prints: arigatou
console.log(restoreString("art", [1, 0, 2])); // prints: rat
