// Solution

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let i = 0;
  let j = numbers.length - 1;
  while (i < j) {
    let sum = numbers[i] + numbers[j];
    if (sum === target) return [++i, ++j];
    if (sum > target) j--;
    else i++;
  }
};

// Test examples
console.log(twoSum([2, 7, 11, 15], 9)); // prints: [ 1, 2 ]
console.log(twoSum([2, 3, 4], 6)); // prints: [ 1, 3 ]
console.log(twoSum([-1, 0], -1)); // prints: [ 1, 2 ]
