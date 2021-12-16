# Solution
def shuffle(nums, n):
    res = []
    for i in range(n):
        res.append(nums[i])
        res.append(nums[n+i])
    return res


# Test examples
print(shuffle([2, 5, 1, 3, 4, 7], 3))  # prints: [2, 3, 5, 4, 1, 7]
print(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4))  # prints: [1, 4, 2, 3, 3, 2, 4, 1]
print(shuffle([1, 1, 2, 2], 2))  # prints: [1, 2, 1, 2]
