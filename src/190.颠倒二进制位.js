/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let result = 0
    for (let i = 0; i < 32; i++) {
        result <<= 1
        let bit = (n >> i) & 1
        result |= bit
    }
    return result >>>= 0;
};
// @lc code=end

