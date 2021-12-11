# Solution
def maximumWealth(accounts):
    res = 0
    for customer in accounts:
        wealth = sum(customer)
        if wealth > res:
            res = wealth
    return res


# Test examples
print(maximumWealth([[1, 2, 3], [3, 2, 1]]))  # prints: 6
print(maximumWealth([[1, 5], [7, 3], [3, 5]]))  # prints: 10
print(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]))  # prints: 17
