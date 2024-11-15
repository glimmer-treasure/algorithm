/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
    if (!root) {
        return root
    }
    let queue = [root]
    let queue2 = []
    const travel = () => {
        while (queue.length) {
            for (let i = 0; i < queue.length; i++) {
                queue[i].next = queue[i + 1] ? queue[i + 1] : null
                if (queue[i].left) {
                    queue2.push(queue[i].left)
                }
                if (queue[i].right) {
                    queue2.push(queue[i].right)
                }
            }
            queue = queue2
            queue2 = []
        }
    }
    travel()
    return root
};
// @lc code=end

