/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = ''
    let index = 0
    let first = strs[0]
    let len = first.length
    while(index < len) {
        let result = strs.every(str => str.charAt(index) === first.charAt(index))
        if (!result) {
            break
        }
        prefix += first.charAt(index)
        index++
    }
    return prefix
};
// @lc code=end

