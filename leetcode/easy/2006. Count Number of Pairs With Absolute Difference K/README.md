# Title: 2006. Count Number of Pairs With Absolute Difference K

### From: https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/

***

## Description

Given an integer array `nums` and an integer `k`, return *the number of pairs `(i, j)` where `i < j` such that `|nums[i] - nums[j]| == k`*.

The value of `|x|` is defined as:

- `x` if `x >= 0`.
- `-x` if `x < 0`.

 

**Example 1:**

<pre>
<b>Input:</b> nums = [1,2,2,1], k = 1
<b>Output:</b> 4
<b>Explanation:</b> The pairs with an absolute difference of 1 are:
- [<b><u>1</b></u>,<b><u>2</b></u>,2,1]
- [<b><u>1</b></u>,2,<b><u>2</b></u>,1]
- [1,<b><u>2</b></u>,2,<b><u>1</b></u>]
- [1,2,<b><u>2</b></u>,<b><u>1</b></u>]
</pre>

**Example 2:**
<pre>
<b>Input:</b> nums = [1,3], k = 3
<b>Output:</b> 0
<b>Explanation:</b> There are no pairs with an absolute difference of 3.
</pre>

**Example 3:**
<pre>
<b>Input:</b> nums = [3,2,1,5,4], k = 2
<b>Output:</b> 3
<b>Explanation:</b> The pairs with an absolute difference of 2 are:
- [<b><u>3</b></u>,2,<b><u>1</b></u>,5,4]
- [<b><u>3</b></u>,2,1,<b><u>5</b></u>,4]
- [3,<b><u>2</b></u>,1,5,<b><u>4</b></u>] 
</pre>

**Constraints:**

- `1 <= nums.length <= 200`
- `1 <= nums[i] <= 100`
- `1 <= k <= 99`

