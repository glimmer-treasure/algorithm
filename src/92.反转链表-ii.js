/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let preLeft = null
    let postRight = null
    let leftNode = null
    let rightNode = null
    let node = head
    let index = 0
    while (node) {
        index += 1
        if (index === (left - 1)) {
            preLeft = node
        }
        if (index === (right + 1)) {
            postRight = node
        }
        if (index === left) {
            leftNode = node
        }
        if (index === right) {
            rightNode = node
        }
        node = node.next
    }
    while (leftNode !== rightNode) {
        let nextLeft = leftNode.next
        rightNode.next = leftNode
        leftNode.next = postRight
        postRight = leftNode
        leftNode = nextLeft
    }
    if (preLeft) {
        preLeft.next = rightNode
        return head
    } else {
        return rightNode
    }
};
// @lc code=end

