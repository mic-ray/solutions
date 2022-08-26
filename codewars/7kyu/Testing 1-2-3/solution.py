def number(lines):
    return [f"{i+1}: {s}" for i, s in enumerate(lines)]


# Test examples
# prints: []
print(number([]))
# prints: ['1: a', '2: b', '3: c']
print(number(["a", "b", "c"]))
