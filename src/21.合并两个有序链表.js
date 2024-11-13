/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (list1 === null && list2 === null) {
        return null
    } 
    let root = new ListNode()
    let cur = null
    while(list1 !== null || list2 !== null) {
        if (!cur) {
            cur = root
        } else {
            cur.next = new ListNode()
            cur = cur.next
        }
        if (list1 === null) {
            cur.val = list2.val
            list2 = list2.next
        } else if (list2 === null) {
            cur.val = list1.val
            list1 = list1.next
        } else if (list1.val < list2.val) {
            cur.val = list1.val
            list1 = list1.next
        } else {
            cur.val = list2.val
            list2 = list2.next
        }
    }
    return root
};
// @lc code=end

