# Solution
def twoSum(nums, target):
    for i in range(len(nums)):
        diff = target - nums[i]
        if diff in nums:
            ind = nums.index(diff)
            if i != ind:
                return [i, ind]

# Test examples
print(twoSum([2,7,11,15], 9)) # prints: [0, 1]
print(twoSum([3,2,4], 6)) # prints: [1, 2]
print(twoSum([3,3], 6)) # prints: [1, 0]