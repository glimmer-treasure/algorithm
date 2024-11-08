/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let len = nums.length
    let res = new Array(len).fill(0)
    for(let i = 0; i < len; i++) {
        if (i === 0) {
            res[i] = 1
        } else {
            res[i] = nums[i - 1] * res[i -1]
        }
    }
    let stuffix = 1
    for(let i = (len - 1); i >= 0; i--) {
        if (i === (len - 1)) {
            stuffix = 1
        } else {
            stuffix = stuffix * nums[i + 1]
        }
        res[i] = res[i] * stuffix
    }
    return res
};
// @lc code=end

