/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function (root) {
    let maxSum = Number.MIN_SAFE_INTEGER
    const dfs = (node) => {
        if (!node) {
            return 0
        }
        let lMaxPathSum = Math.max(0, dfs(node.left))
        let rMaxPathSum = Math.max(0, dfs(node.right))
        maxSum = Math.max(maxSum, lMaxPathSum + rMaxPathSum + node.val)
        return Math.max(lMaxPathSum + node.val, rMaxPathSum + node.val)
    }
    dfs(root)
    return maxSum
};
// @lc code=end

