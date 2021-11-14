# Solution
def rgb(r, g, b):
    return "".join([conv(x) for x in [r, g, b]])


def conv(x):
    if x <= 0:
        return "00"
    if x >= 255:
        return "FF"
    return "{:02X}".format(x)


# Test examples
print(rgb(0, 0, 0))  # prints: 000000
print(rgb(255, 255, 255))  # prints: FFFFFF
print(rgb(255, 255, 300))  # prints: FFFFFF
print(rgb(148, 0, 211))  # prints: 9400D3
