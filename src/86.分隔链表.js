/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (!head) {
        return head
    }
    let dummy = new ListNode(null, head)
    let splitPoint = null
    let preSplit = dummy
    let cur = head
    while(cur) {
        if (cur.val >= x) {
            splitPoint = cur
            break
        } else {
            preSplit = preSplit.next
            cur = cur.next
        }
    }
    if (!splitPoint) {
        return head
    }
    cur = splitPoint.next
    let preCur = splitPoint
    while(cur) {
        let next = cur.next
        if(cur.val < x) {
            preCur.next = next
            cur.next = preSplit.next
            preSplit.next = cur
            preSplit = cur
            cur = next
        } else {
            preCur = cur
            cur = next
        }
    }
    return dummy.next
};
// @lc code=end

