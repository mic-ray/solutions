# Solution
def buildArray(nums):
    return [nums[nums[i]] for i in range(len(nums))]

# Test examples
print(buildArray([0,2,1,5,3,4])) # prints: [0, 1, 2, 4, 5, 3]
print(buildArray([5,0,1,2,3,4])) # prints: [4, 5, 0, 1, 2, 3]
