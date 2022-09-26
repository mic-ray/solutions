/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
  return Math.max(...sentences.map(sentence => (sentence.match(/ /g) || []).length))+1
};

// Test examples
console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])); // prints: 6
console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"])); // prints: 3
console.log(mostWordsFound(["this is a test", "onlyonewordtest"])); // prints: 4