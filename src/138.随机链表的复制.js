/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 随机链表的复制
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

function _Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};
/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
    let map = new Map()
    let cur = head
    if (!cur) {
        return null
    }
    while (cur) {
        map.set(cur, new _Node(cur.val))
        cur = cur.next
    }
    cur = head
    while (cur) {
        let node = map.get(cur)
        node.next = map.get(cur.next)
        node.random = map.get(cur.random)
        cur = cur.next
    }
    return map.get(head)
};
// @lc code=end

