# Solution
from itertools import permutations as perm


def permutations(string):
    return list(set([''.join(p) for p in perm(string)]))


# Test examples
# prints: ['a']
print(permutations("a"))
# prints: ['ba', 'ab']
print(permutations("ab"))
# prints: ['baab', 'abab', 'bbaa', 'aabb', 'baba', 'abba']
print(permutations("aabb"))
