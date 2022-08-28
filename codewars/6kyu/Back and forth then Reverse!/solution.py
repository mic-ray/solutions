def arrange(s):
    # Initialize result list and two pointers
    t = []
    i = 0
    j = len(s)-1
    while(i < j):
        # Append elements from beginning/end first
        # depending on even/uneven index
        if i % 2 == 0:
            t.append(s[i])
            t.append(s[j])
        else:
            t.append(s[j])
            t.append(s[i])
        i += 1
        j -= 1
    # If the input list is of uneven size
    if len(s) % 2 == 1:
        # Append the middle element
        t.append(s[i])
    return t


# Test examples
# prints: [1, 2]
print(arrange([1, 2]))
# prints: [4, 2, 3]
print(arrange([4, 3, 2]))
# prints: [9, 1, 5, 7, -2, 6, -3, 8, 5]
print(arrange([9, 7, -2, 8, 5, -3, 6, 5, 1]))
# prints: [1]
print(arrange([1]))
# prints: []
print(arrange([]))
# prints: [2, 4, 3, 4]
print(arrange([2, 4, 3, 4]))
