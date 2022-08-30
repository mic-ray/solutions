# Note: This solution is very verbose compared to the other solutions on Codewars
# However I still wanted to hold on to it as a reminder of the approach used
def pair_of_shoes(shoes):
    # If the list is of uneven size pairs can't work out
    if len(shoes) % 2 == 1:
        return False

    # Setup dictionary to held existing shoes
    t = {}

    for s in shoes:
        # Add shoe size if not present in dict yet
        if s[1] not in t:
            t[s[1]] = [s]

        else:
            # Remove the associated shoe if a pair is present
            if s[0] == 0 and [1, s[1]] in t[s[1]]:
                t[s[1]].remove([1, s[1]])
            elif s[0] == 1 and [0, s[1]] in t[s[1]]:
                t[s[1]].remove([0, s[1]])

            # Otherwise add shoe to size list
            else:
                t[s[1]].append(s)

            # Remove the size if no shoe is in list anymore
            if len(t[s[1]]) == 0:
                t.pop(s[1])

    # Return whether dict is empty (no unmatched shoe left)
    return not t


# Test examples:
# prints: True
print(pair_of_shoes([[0, 21],
                     [1, 23],
                     [1, 21],
                     [0, 23]]))
# prints: False
print(pair_of_shoes([[0, 21],
                     [1, 23],
                     [1, 21],
                     [1, 23]]))
