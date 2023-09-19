# Title: 2667. Create Hello World Function


### From: https://leetcode.com/problems/create-hello-world-function/

***

## Description

Write a function `createHelloWorld`. It should return a new function that always returns `"Hello World"`. 

**Example 1:**
<pre>
<b>Input:</b> args = []
<b>Output:</b> "Hello World"
<b>Explanation:</b>
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
</pre>

**Example 2:**
<pre>
<b>Input:</b> args = [{},null,42]
<b>Output:</b> "Hello World"
<b>Explanation:</b> 
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".
</pre>

**Constraints:**

- `0 <= args.length <= 10`