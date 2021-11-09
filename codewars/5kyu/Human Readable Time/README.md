

# Title: Human Readable Time

### From: https://www.codewars.com/kata/52685f7382004e774f0001f7

***
## Description

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (`HH:MM:SS`)

- `HH` = hours, padded to 2 digits, range: 00 - 99  
- `MM` = minutes, padded to 2 digits, range: 00 - 59  
- `SS` = seconds, padded to 2 digits, range: 00 - 59  

The maximum time never exceeds 359999 (`99:59:59`)

**Examples:**

    humanReadable(0); // should return '00:00:00'
    humanReadable(59); // should return '00:00:59'
    humanReadable(60); // should return '00:01:00'
    humanReadable(3599); // should return '00:59:59'
    humanReadable(3600); // should return '01:00:00' 
    humanReadable(86399); // should return '23:59:59'
    humanReadable(86400); // should return '24:00:00'
    humanReadable(359999); // should return '99:59:59'