// Solution
function solution(input, markers) {
    var re = markers.map((x) => '\\' + x + '.+').join('|');
    let regex = new RegExp(re, 'g');
    return input
        .replace(regex, '')
        .replace(/(?<!,)\s+/g, '\n')
        .trim();
}

// Test examples

// prints:
// apples, pears
// grapes
// bananas
console.log(
    solution('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!'])
);

// prints:
// Q
// u
// e
console.log(solution('Q @b\nu\ne -e f g', ['@', '-']));
