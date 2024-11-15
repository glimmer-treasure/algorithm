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
    const travel = () => {
        while (queue.length) {
            let nextIndex = queue.length
            for (let i = 0; i < nextIndex; i++) {
                queue[i].next = (i + 1) < nextIndex ? queue[i + 1] : null
                if (queue[i].left) {
                    queue.push(queue[i].left)
                }
                if (queue[i].right) {
                    queue.push(queue[i].right)
                }
            }
            queue = queue.slice(nextIndex)
        }
    }
    travel()
    return root
};
// @lc code=end

