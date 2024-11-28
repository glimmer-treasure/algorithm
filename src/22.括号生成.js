/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let list = []
    let path = []
    let backtrace = (l, r) => {
        if (l === 0 && r === 0) {
            list.push(path.join(''))
            return
        }
        if (r < l) {
            return
        }
        ['(', ')'].forEach((item) => {
            if (item === '(' && l > 0) {
                path.push('(')
                backtrace(l - 1, r)
                path.pop()
            } else if (item === ')' && r > 0) {
                path.push(')')
                backtrace(l, r - 1)
                path.pop()
            }
        })

    }
    backtrace(n, n)
    return list
};
// @lc code=end