/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
var reverseKGroup = function(head, k) {
    const reverseList = ({start, end, preStart, postEnd}) => {
        if (preStart) {
            preStart.next = end
        } else {
            head = end
        }
        let tail = start
        while(start !== end) {
            const nextStart = start.next
            end.next = start
            start.next = postEnd
            postEnd = end.next
            start = nextStart
        }
        return tail
    }
    let cur = head
    let index = 0
    let start = null
    let end = null
    let preStart = null
    let postEnd = null
    while(cur) {
        index += 1
        const next = cur.next
        if (index === 1) {
            start = cur
        }
        if (index === k) {
            end = cur
            postEnd = cur.next
            preStart = reverseList({start, end, preStart, postEnd})
            index = 0
        }
        cur = next
    }
    return head
};
// @lc code=end

