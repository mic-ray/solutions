# Solution
import re
def parse_IPv6(iPv6):
    nums = re.findall(r"(.{4}).?",iPv6)
    return "".join(list(map(lambda x: str(sum([int(n,16) for n in x])), nums)))

# Test examples
print(parse_IPv6("1111:1111:1111:1111:1111:1111:1111:1111")) # prints: 44444444
print(parse_IPv6("1111-1111-1111-1111-1111-1111-1111-1111")) # prints: 44444444
print(parse_IPv6("ABCD_1111_ABCD_1111_ABCD_1111_ABCD_1111")) # prints: 464464464464
