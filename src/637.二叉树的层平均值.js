/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    if (!root) {
        return []
    }
    let nodes = [root]
    let averages = []
    while (nodes.length > 0) {
        let len = nodes.length
        let sum = 0
        for (let i = 0; i < len; i++) {
            sum += nodes[i].val
            if (nodes[i].left) {
                nodes.push(nodes[i].left)
            }
            if (nodes[i].right) {
                nodes.push(nodes[i].right)
            }
        }
        averages.push(sum / len)
        nodes = nodes.slice(len)
    }
    return averages
};
// @lc code=end

