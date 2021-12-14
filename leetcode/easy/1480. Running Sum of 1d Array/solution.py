# Solution
def runningSum(nums):
    res = []
    acc = 0
    for i in range(len(nums)):
        acc = acc + nums[i]
        res.append(acc)
    return res


# Test examples
print(runningSum([1, 2, 3, 4]))  # prints: [1, 3, 6, 10]
print(runningSum([1, 1, 1, 1, 1]))  # prints: [1, 2, 3, 4, 5]
print(runningSum([3, 1, 2, 10, 1]))  # prints: [3, 4, 6, 16, 17]
