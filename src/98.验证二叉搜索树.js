/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function (root) {
    if (!root) {
        return false
    }
    let pre = null
    let result = true
    const treval = (node) => {
        if (!node) {
            return
        }
        treval(node.left)
        if (pre) {
            result = result && pre.val < node.val
        }
        pre = node
        treval(node.right)
    }
    treval(root)
    return result
};
// @lc code=end

