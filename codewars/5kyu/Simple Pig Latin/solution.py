# Solution
import re


def pig_it(text):
    return re.sub(r"\b\w*", lambda m: (m.group(0)+m.group(0)[0]+"ay" if m.group(0) else m.group(0))[1:], text)


# Test examples:
print(pig_it('Pig latin is cool'))  # prints: igPay atinlay siay oolcay
print(pig_it('Hello world !'))  # prints: elloHay orldway !
