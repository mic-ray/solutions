// Solution
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) == k) count++;
    }
  }
  return count;
};

// Test examples
console.log(countKDifference([1, 2, 2, 1], 1)); // prints: 4
console.log(countKDifference([1, 3], 3)); // prints: 0
console.log(countKDifference([3, 2, 1, 5, 4], 2)); // prints: 3
