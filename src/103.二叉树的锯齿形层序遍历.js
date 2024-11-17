/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root) {
        return []
    }
    let nodes = [root]
    let levels = []
    let isReverse = false
    while (nodes.length > 0) {
        let len = nodes.length
        let level = []
        for (let i = 0; i < len; i++) {
            level.push(nodes[i].val)
            if (nodes[i].left) {
                nodes.push(nodes[i].left)
            }
            if (nodes[i].right) {
                nodes.push(nodes[i].right)
            }
        }
        if (isReverse) {
            level.reverse()
        }
        levels.push(level)
        nodes = nodes.slice(len)
        isReverse = !isReverse
    }
    return levels
};
// @lc code=end

