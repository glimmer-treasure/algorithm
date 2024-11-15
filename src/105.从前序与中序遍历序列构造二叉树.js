/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 */

// @lc code=start

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (preorder.length === 0) {
        return null
    }
    if (preorder.length === 1) {
        return new TreeNode(preorder[0])
    }
    let rootVal = preorder.shift()
    let root = new TreeNode(rootVal)
    let index = 0
    for (let i = 0; i < inorder.length; i++) {
        if (inorder[i] === rootVal) {
            index = i
            break
        }
    }
    const preorderL = preorder.slice(0, index)
    const inorderL = inorder.slice(0, index)
    const preorderR = preorder.slice(index)
    const inorderR = inorder.slice(index + 1)
    root.left = buildTree(preorderL, inorderL)
    root.right = buildTree(preorderR, inorderR)
    return root
};
// @lc code=end

