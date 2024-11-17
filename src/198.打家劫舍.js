/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let dpTable = new Array(nums.length).fill(0)
    dpTable[0] = nums[0]
    dpTable[1] = Math.max(dpTable[0], nums[1])
    for (let i = 2; i < nums.length; i++) {
        dpTable[i] = Math.max(dpTable[i - 1], dpTable[i - 2] + nums[i])
    }
    return dpTable[nums.length - 1]
};
// @lc code=end

