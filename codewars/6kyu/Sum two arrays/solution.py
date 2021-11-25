# Solution
def sum_arrays(array1, array2):
    if array1 == [] and array2 == []:
        return []

    def toNum(x):
        if x == []:
            return 0
        return int("".join([str(i) for i in x]))
    res = [int(x) if x != "-" else "-" for x in str(toNum(array1)+toNum(array2))]
    if "-" in res:
        del res[0]
        res[0] = -abs(res[0])
    return res


# Test examples
print(sum_arrays([3, 2, 9], [1, 2]))  # prints: [3, 4, 1]
print(sum_arrays([4, 7, 3], [1, 2, 3]))  # prints: [5, 9, 6]
print(sum_arrays([1], [5, 7, 6]))  # prints: [5, 7, 7]
print(sum_arrays([3, 2, 6, 6], [-7, 2, 2, 8]))  # prints: [-3, 9, 6, 2]
