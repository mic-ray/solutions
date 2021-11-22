// Solution

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (nums[middle] === target) return middle;
        if (nums[middle] > target) right = middle - 1;
        else left = middle + 1;
    }
    return -1;
};

// Test examples
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // prints: -1
console.log(search([-1, 0, 3, 5, 9, 12], 0)); // prints: 1
console.log(search([-1, 0, 3, 5, 9, 12], 9)); // prints: 4
