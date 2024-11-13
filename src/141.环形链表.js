/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = head
    let slow = head
    while(fast) {
        if (!fast.next || !fast.next.next) {
            return false
        }
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {
            let start = head
            let meeting = fast
            while(start !== meeting) {
                start = start.next
                meeting = meeting.next
            }
            pos = meeting.val
            return true
        }
    }
    return false
};
// @lc code=end

