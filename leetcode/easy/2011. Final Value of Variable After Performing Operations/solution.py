# Solution
def finalValueAfterOperations(operations):
    res = 0
    for s in operations:
        if s == "++X" or s == "X++":
            res = res + 1
        else:
            res = res -1
    return res

# Test examples
print(finalValueAfterOperations(["--X","X++","X++"])) # prints: 1
print(finalValueAfterOperations(["++X","++X","X++"])) # prints: 3
print(finalValueAfterOperations(["X++","++X","--X","X--"])) # prints: 0
