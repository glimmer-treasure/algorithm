/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    if (b.length > a.length) {
        let temp = a
        a = b
        b = temp
    }
    let aIndex = a.length - 1
    let bIndex = b.length - 1
    let carry = false
    let result = ''
    while (aIndex >= 0) {
        let aByte = a.charAt(aIndex)
        let bByte = bIndex >= 0 ? b.charAt(bIndex) : '0'
        if (aByte === '1' && bByte === '1') {
            result = `${carry ? '1' : '0'}` + result
            carry = true
        } else if (aByte === '0' && bByte === '0') {
            result = `${carry ? '1' : '0'}` + result
            carry = false
        } else {
            if (carry) {
                result = '0' + result
                carry = true
            } else {
                result = '1' + result
            }
        }
        aIndex--
        bIndex--
    }
    return carry ? '1' + result : result
};
// @lc code=end

