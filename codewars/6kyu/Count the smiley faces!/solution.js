// Solution
function countSmileys(arr){
    // Early return for empty arrays
    if(!arr.length) return 0
    // Check the (joined) array for smileys
    matches = arr.join("").match(/[:;][-~]?[)D]/g)
    // Return number of found smileys (if any found)
    return matches != null ? matches.length : 0
}

// Test examples
console.log(countSmileys([':)', ';(', ';}', ':-D']));  // prints: 2
console.log(countSmileys([';D', ':-(', ':-)', ';~)'])); // prints: 3
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // prints: 1