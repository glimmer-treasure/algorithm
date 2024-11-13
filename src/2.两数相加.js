/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let root = new ListNode()
    let cur = null
    let carry = 0
    while(l1 !== null || l2 !== null || carry !== 0) {
        if (!cur) {
            cur = root
        } else {
            cur.next = new ListNode()
            cur = cur.next
        }
        let num = l1 === null ? 0 : l1.val
        let num2 = l2 === null ? 0 : l2.val
        let result = num + num2 + carry
        if (result >= 10) {
            carry = 1
            result = result - 10
        } else {
            carry = 0
            
        }
        cur.val = result
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }
    return root
};
// @lc code=end

