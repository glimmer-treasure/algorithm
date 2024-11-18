/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let dpTable = new Array(s.length + 1).fill(false)
    dpTable[0] = true
    let wordSet = new Set(wordDict)
    for (let i = 1; i < dpTable.length; i++) {
        for (let word of wordSet.values()) {
            if ((i - word.length < 0) || s.slice(i - word.length, i) !== word) {
                continue
            }
            dpTable[i] = dpTable[i - word.length]
            if (dpTable[i]) {
                break
            }
        }
    }
    return dpTable[s.length]
};
// @lc code=end

