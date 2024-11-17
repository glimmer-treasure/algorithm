/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let dpTable = new Array(n + 1).fill(0)
    dpTable[1] = 1
    dpTable[2] = 2
    for (let i = 3; i < dpTable.length; i++) {
        dpTable[i] = dpTable[i - 2] + dpTable[i - 1]
    }
    return dpTable[n]
};
// @lc code=end

