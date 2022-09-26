# Title: 2114. Maximum Number of Words Found in Sentences

### From: https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

***

## Description

A **sentence** is a list of **words** that are separated by a single space with no leading or trailing spaces.

You are given an array of strings `sentences`, where each `sentences[i]` represents a single **sentence**.

Return *the **maximum number of words** that appear in a single sentence*.
 
**Example 1:**

<pre>
<b>Input:</b> sentences = ["alice and bob love leetcode", "i think so too", <u>"this is great thanks very much"</u>]
<b>Output:</b> 6
<b>Explanation:</b> 
- The first sentence, "alice and bob love leetcode", has 5 words in total.
- The second sentence, "i think so too", has 4 words in total.
- The third sentence, "this is great thanks very much", has 6 words in total.
Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.
</pre>

**Example 2:**
<pre>
<b>Input:</b> sentences = ["please wait", <u>"continue to fight"</u>, <u>"continue to win"</u>]
<b>Output:</b> 3
<b>Explanation:</b> It is possible that multiple sentences contain the same number of words. 
In this example, the second and third sentences (underlined) have the same number of words.
</pre>

**Constraints:**


- `1 <= sentences.length <= 100`
- `1 <= sentences[i].length <= 100`
- `sentences[i]` consists only of lowercase English letters and ' ' only.
- `sentences[i]` does not have leading or trailing spaces.
- All the words in `sentences[i]` are separated by a single space.
