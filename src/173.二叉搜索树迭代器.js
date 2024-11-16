/*
 * @lc app=leetcode.cn id=173 lang=javascript
 *
 * [173] 二叉搜索树迭代器
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
 */
class BSTIterator {
    constructor(root) {
        this.list = []
        this.cur = root ? root : null
    }
    /**
     * @returns {number}
     */
    next() {
        let node = null
        while (this.cur) {
            this.list.push(this.cur)
            this.cur = this.cur.left
        }
        node = this.list.pop()
        this.cur = node.right
        return node.val
    }
    /**
     * @return {boolean}
    */
    hasNext() {
        return this.cur || this.list.length > 0
    }
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

