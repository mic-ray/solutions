# Solution
def wave(people):
    return [people[:i] + people[i:].capitalize() for i in range(len(people)) if people[i] != " "]


# Test examples

# prints: ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']
print(wave("hello"))
# prints: ['Codewars', 'cOdewars', 'coDewars', 'codEwars', 'codeWars', 'codewArs', 'codewaRs', 'codewarS']
print(wave("codewars"))
# prints: ['Two words', 'tWo words', 'twO words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS']
print(wave("two words"))
