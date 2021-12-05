// Solution
/**
 * @param {number[]} nums
 * @return {number[]} Modified nums
 */
var moveZeroes = function (nums) {
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            j--;
        } else {
            i++;
        }
    }
    return nums;
};

// Test examples
console.log(moveZeroes([0, 1, 0, 3, 12])); // prints: [ 1, 3, 12, 0, 0 ]
console.log(moveZeroes([0])); // prints: [0]
