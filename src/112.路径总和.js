/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    const _hasPathSum = (node, targetSum) => {
        if (!node.left && !node.right) {
            return node.val === targetSum
        }
        if (node.left && node.right) {
            return _hasPathSum(node.left, targetSum - node.val) || _hasPathSum(node.right, targetSum - node.val)
        }
        if (!node.left) {
            return _hasPathSum(node.right, targetSum - node.val)
        }
        if (!node.right) {
            return _hasPathSum(node.left, targetSum - node.val)
        }

    }
    return root ? _hasPathSum(root, targetSum) : false
};
// @lc code=end

