// Solution

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  var left = 0;
  var right = nums.length - 1;
  while (left <= right) {
    var middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) return middle;
    if (nums[middle] > target) right = middle - 1;
    else left = middle + 1;
  }
  return nums[middle] > target ? middle : middle + 1;
};

// Test examples
console.log(searchInsert([1, 3, 5, 6], 5)); // prints: 2
console.log(searchInsert([1, 3, 5, 6], 2)); // prints: 1
console.log(searchInsert([1, 3, 5, 6], 7)); // prints: 4
console.log(searchInsert([1, 3, 5, 6], 0)); // prints: 0
console.log(searchInsert([1], 0)); // prints: 0
