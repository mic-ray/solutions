# Solution
from collections import Counter


def checkInclusion(s1: str, s2: str) -> bool:
    count1 = Counter(s1)
    i = 0
    j = len(s1)
    while(j <= len(s2)):
        if Counter(s2[i:j]) == count1:
            return True
        i = i+1
        j = j+1
    return False


# Test examples
print(checkInclusion("ab", "eidbaooo"))  # prints: True
print(checkInclusion("ab", "eidboaoo"))  # prints: False
