/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const head_node = new ListNode(0);
  let current_node = head_node;
  let carry = 0;
  let a = l1;
  let b = l2;
  while(a !==null || b !== null) {
    let sum = (a ? a.val : 0) + (b ? b.val : 0) + carry;
    carry = Math.floor(sum / 10);
    current_node.next = new ListNode(sum%10);

    // move to next pointer
    current_node = current_node.next;
    a = a ? a.next : null;
    b = b ? b.next : null;
  }
  if (carry !== 0) {
    current_node.next = new ListNode(carry);
  }
  return head_node.next;
};
// @lc code=end

