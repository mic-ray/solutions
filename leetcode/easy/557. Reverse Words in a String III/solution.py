# Solution
def reverseWords(s: str) -> str:
    return " ".join([reverseWord(word) for word in s.split()])


def reverseWord(word: str) -> str:
    word = list(word)
    left = 0
    right = len(word)-1

    while(left < right):
        temp = word[left]
        word[left] = word[right]
        word[right] = temp
        left = left+1
        right = right-1

    return "".join(word)


# Test examples

# prints: s'teL ekat edoCteeL tsetnoc
print(reverseWords("Let's take LeetCode contest"))

# prints: doG gniD
print(reverseWords("God Ding"))
