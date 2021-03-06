/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Solution

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast.next !== null) {
    slow = slow.next;
    // Break the loop in case fast pointer
    // can not go two nodes further
    if (!fast.next.next) break;
    fast = fast.next.next;
  }
  return slow;
};
