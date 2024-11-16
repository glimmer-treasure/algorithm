/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function (root) {
    if (!root) {
        return []
    }
    let nodes = [root]
    let right = []
    while (nodes.length > 0) {
        let len = nodes.length
        for (let i = 0; i < len; i++) {
            if (nodes[i].left) {
                nodes.push(nodes[i].left)
            }
            if (nodes[i].right) {
                nodes.push(nodes[i].right)
            }
            if (i === (len - 1)) {
                right.push(nodes[i].val)
            }
        }
        nodes = nodes.slice(len)
    }
    return right
};
// @lc code=end

