// Solution
var map = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const RomanNumerals = {
  toRoman: (num) => {
    var res = "";
    for (n in map) {
      while (num >= map[n]) {
        num -= map[n];
        res += n;
      }
    }
    return res;
  },
  fromRoman: (rom) => {
    var res = 0;
    for (r in map) {
      while (rom.startsWith(r)) {
        rom = rom.substr(r.length);
        res += map[r];
      }
    }
    return res;
  },
};

// Test examples
console.log(RomanNumerals.toRoman(1000)); // prints: M
console.log(RomanNumerals.toRoman(4)); // prints: IV
console.log(RomanNumerals.toRoman(1)); // prints: I
console.log(RomanNumerals.toRoman(1990)); // prints: MCMXC
console.log(RomanNumerals.toRoman(2008)); // prints: MMVIII

console.log(RomanNumerals.fromRoman("M")); // prints: 1000
console.log(RomanNumerals.fromRoman("I")); // prints: 1
console.log(RomanNumerals.fromRoman("IV")); // prints: 4
console.log(RomanNumerals.fromRoman("MMVIII")); // prints: 2008
console.log(RomanNumerals.fromRoman("MDCLXVI")); // prints: 1666
