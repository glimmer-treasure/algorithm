/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(null, head)
    let fast = dummy
    let slow = dummy
    while((n + 1) > 0 && fast) {
        fast = fast.next
        n--
    }
    while(fast) {
        fast = fast.next
        slow = slow.next
    }
    const deleteNode = slow.next
    const postDelete = deleteNode.next
    slow.next = postDelete
    return dummy.next
};
// @lc code=end

