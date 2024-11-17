/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function (root) {
    let result = Number.MAX_SAFE_INTEGER
    let pre = null
    const treval = (node) => {
        if (!node) {
            return
        }
        treval(node.left)
        if (pre) {
            result = Math.min(result, Math.abs(node.val - pre.val))
        }
        pre = node
        treval(node.right)
    }
    // const treval2 = (node) => {
    //     let list = []
    //     while (node || list.length > 0) {
    //         if (node) {
    //             list.push(node)
    //             node = node.left
    //             continue
    //         }
    //         node = list.pop()
    //         if (pre) {
    //             result = Math.min(result, Math.abs(node.val - pre.val))
    //         }
    //         pre = node
    //         node = node.right
    //     }
    // }
    treval(root)
    return result

};
// @lc code=end

