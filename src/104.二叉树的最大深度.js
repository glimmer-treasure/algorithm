/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) {
        return 0
    }
    const getMaxDepth = (node) => {
        if (!node) {
            return 0
        } else {
            return 1 + Math.max(getMaxDepth(node.left), getMaxDepth(node.right))
        }
    }
    return getMaxDepth(root)
};
// @lc code=end

