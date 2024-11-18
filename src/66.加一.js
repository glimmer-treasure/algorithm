/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let carry = 0
    let len = digits.length
    let result = 0
    for (let i = (len - 1); i >= 0; i--) {
        if (i === (len - 1)) {
            result = digits[i] + 1 + carry
        } else {
            result = digits[i] + carry
        }
        carry = Math.floor(result / 10)
        digits[i] = result % 10
    }
    if (carry > 0) {
        digits.unshift(1)
    }
    return digits
};
// @lc code=end

