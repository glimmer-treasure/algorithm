/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let dummy = new ListNode(null, head)
    let cur = head
    let pre = dummy
    while(cur) {
        let next = cur.next
        if (next && pre.val !== cur.val && cur.val === next.val) {
            while(next && cur.val === next.val) {
                cur = next
                next = cur.next
            }
            pre.next = next
            cur = next
        } else {
            pre = cur
            cur = next
        }
    }
    return dummy.next
};
// @lc code=end

