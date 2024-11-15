/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (!root) {
        return null
    }
    let leftTail = flatten(root.left)
    let rightTail = flatten(root.right)
    if (!leftTail && !rightTail) {
        return root
    }
    if (leftTail && rightTail) {
        let temp = root.right
        root.right = root.left
        root.left = null
        leftTail.right = temp
        return rightTail
    }
    if (!leftTail) {
        return rightTail
    }
    if (!rightTail) {
        root.right = root.left
        root.left = null
        return leftTail
    }
};
// @lc code=end

