# Title: 2620. Counter

### From: https://leetcode.com/problems/counter/

***

## Description

Given an integer `n`, return a `counter` function. This `counter` function initially returns `n` and then returns 1 more than the previous value every subsequent time it is called (`n`, `n + 1`, `n + 2`, etc). 
 
**Example 1:**

<pre>
<b>Input:</b>
n = 10 
["call","call","call"]
<b>Output:</b> [10,11,12]
<b>Explanation:</b>
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
</pre>

**Example 2:**
<pre>
<b>Input:</b>
n = -2
["call","call","call","call","call"]
<b>Output:</b> [-2,-1,0,1,2]
<b>Explanation:</b> counter() initially returns -2. Then increases after each sebsequent call.
</pre>

**Constraints:**

- `-1000 <= n <= 1000`
- `0 <= calls.length <= 1000`
- `calls[i] === "call"`