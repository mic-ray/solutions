// Solution
function topThreeWords(text) {
    // Remove all unnecessary spaces and chars
    text = text.replace(/^\s+|\s+$|[.\-\/]+/g, '');

    // Result array
    var res = [];
    // Occurences object
    var occ = {};

    // Split the text into an array
    text.split(' ')
        // Filter all non letters
        .filter((x) => x.match(/\w+/g))
        // Map all words to lowercase
        .map((x) => x.toLowerCase())
        // For each word
        .forEach((x, i) => {
            // If not present in the occurences object
            // create an array with the current index
            if (!occ[x]) occ[x] = [i];
            // Else push the index in existin array
            else occ[x].push(i);
        });

    // Sort the found occurences by their length (descending)
    var sort = Object.values(occ).sort((a, b) => b.length - a.length);
    // For the first 3 items of the sort array
    for (var i = 0; i < 3; i++) {
        // Get the current element
        var val = sort[i];
        // If the element is defined
        // Push the corresponding word
        // to the result array
        if (val) res.push(getKeyByValue(occ, val));
    }
    // Return result array
    return res;
}

// Helper function that gets the key from the given obj, that corresponds to the given va
const getKeyByValue = (obj, val) =>
    Object.keys(obj).find((key) => obj[key] === val);

// Test examples
console.log(
    topThreeWords(
        'In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.'
    )
); // prints: [ 'a', 'of', 'on' ]

console.log(
    topThreeWords('e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e')
); // prints: [ 'e', 'ddd', 'aa' ]

console.log(topThreeWords("  //wont won't won't")); // prints: [ "won't", 'wont' ]
