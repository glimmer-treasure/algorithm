/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    if (inorder.length === 0) {
        return null
    }
    if (inorder.length === 1) {
        return new TreeNode(inorder[0])
    }
    let len = postorder.length
    let lastIndex = len - 1
    let index = 0
    let root = new TreeNode(postorder[lastIndex])
    for (let i = 0; i < inorder.length; i++) {
        if (inorder[i] === postorder[lastIndex]) {
            index = i
        }
    }
    const inorderL = inorder.slice(0, index)
    const postorderL = postorder.slice(0, index)
    const inorderR = inorder.slice(index + 1)
    const postorderR = postorder.slice(index, lastIndex)
    root.left = buildTree(inorderL, postorderL)
    root.right = buildTree(inorderR, postorderR)
    return root
};
// @lc code=end

