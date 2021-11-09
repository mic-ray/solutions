// Solution
function humanReadable(seconds) {
  return [
    Math.floor(seconds / 3600),
    Math.floor(seconds / 60) % 60,
    seconds % 60,
  ]
    .map((x) => x.toString().padStart(2, "0"))
    .join(":");
}

// Text examples
console.log(humanReadable(0)); // prints: 00:00:00
console.log(humanReadable(59)); // prints: 00:00:59
console.log(humanReadable(60)); // prints: 00:01:00
console.log(humanReadable(3599)); // prints: 00:59:59
console.log(humanReadable(3600)); // prints: 01:00:00
console.log(humanReadable(86399)); // prints: 23:59:59
console.log(humanReadable(86400)); // prints: 24:00:00
console.log(humanReadable(359999)); // prints: 99:59:59
