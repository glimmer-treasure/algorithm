/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
// var countNodes = function (root) {
//     if (!root) {
//         return 0
//     }
//     const left = countNodes(root.left)
//     const right = countNodes(root.right)
//     return left + right + 1
// };

const countNodes = (root) => {
    if (!root) {
        return 0
    }
    let [_, count] = isCompleteBinaryTree(root)
    if (count) {
        return count
    } else {
        return countNodes(root.left) + countNodes(root.right) + 1
    }
}
const isCompleteBinaryTree = (node) => {
    if (!node) {
        return [true, 0]
    }
    let left = node.left
    let height = 0
    let right = node.right
    while (left && right) {
        height += 1
        left = left.left
        right = right.right
    }
    if (!left && !right) {
        return [true, (2 << height) - 1]
    } else {
        return [false, 0]
    }
}
// @lc code=end

