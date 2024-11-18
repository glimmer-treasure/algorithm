/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
    let res = 0
    while (n) {
        res++
        n = n & (n - 1)
    }
    return res
};
// @lc code=end

