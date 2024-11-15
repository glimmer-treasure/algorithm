/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    const _isSymmetric = (root1, root2) => {
        if (!root1 && !root2) {
            return true
        } else if (root1 && root2) {
            return root1.val === root2.val && _isSymmetric(root1.left, root2.right) && _isSymmetric(root1.right, root2.left)
        } else {
            return false
        }
    }
    return root ? _isSymmetric(root.left, root.right) : true
};
// @lc code=end

