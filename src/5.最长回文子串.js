/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let len = s.length
    let dpTable = new Array(len)
    let result = ''
    for (let i = 0; i < len; i++) {
        dpTable[i] = new Array(len).fill(null)
    }
    for (let i = 0; i < len; i++) {
        dpTable[i][i] = s[i]
    }
    for (let i = 0; i < len; i++) {
        if ((i + 1) < len) {
            dpTable[i][i + 1] = s[i] === s[i + 1] ? `${s[i]}${s[i]}` : null
        }
    }
    for (let i = 1; i < len; i++) {
        for (let j = i + 2; j < len; j++) {
            if (s[i] === s[j] && dpTable[i + 1][j - 1]) {
                dpTable[i][j] = s[i] + dpTable[i + 1][j - 1] + s[j]
                result = dpTable[i][j].length > result.length ? dpTable[i][j] : result
            }
        }
    }
    return result
};
// @lc code=end

