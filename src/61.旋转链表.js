/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let slow = head
    let fast = head
    let cur = head
    let len = 0
    while(cur) {
        len++
        cur = cur.next
    }
    if (len === 0) {
        return head
    }
    k %= len
    while(k > 0) {
        fast = fast.next
        k--
    }
    while(true) {
        if (!fast.next) {
            break
        }
        fast = fast.next
        slow = slow.next
    }
    fast.next = head
    head = slow.next
    slow.next = null
    return head
};
// @lc code=end

