# Title: Character with longest consecutive repetition

### From: https://www.codewars.com/kata/586d6cefbcc21eed7a001155

***

## Description
For a given string `s` find the character `c` (or `C`) with longest consecutive repetition and return:

    [c, l]

where `l` (or `L`) is the length of the repetition. If there are two or more characters with the same `l` return the first in order of appearance.

For empty string return:

    ["", 0]

In JavaScript: If you use `Array.sort` in your solution, you might experience issues with the random tests as `Array.sort` is not stable in the Node.js version used by CodeWars. This is not a kata issue.

**Examples:**

    longestRepetition(""); // should return ["",0]
    longestRepetition("ba"); // should return ["b",1]
    longestRepetition("aaaabb"); // should return ["a",4]
    longestRepetition("abbbbb"); // should return ["b",5]
    longestRepetition("bbbaaabaaaa"); // should return ["a",4]
    
Happy coding! :)