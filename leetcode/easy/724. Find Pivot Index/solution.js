/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum;
    let rightSum;
    for(let i = 0; i<nums.length; i++){
        leftSum = sum(nums.slice(0,i));
        rightSum = sum(nums.slice(i+1,nums.length));
        if(leftSum == rightSum){
            return i
        }
    }
    return -1;
};

const sum = (array) => array.reduce((x,y) => x+y, 0);

// Test examples
console.log(pivotIndex([1,7,3,6,5,6])); // prints: 3
console.log(pivotIndex([1,2,3])); // prints: -1
console.log(pivotIndex([2,-1,1])); // prints: 0