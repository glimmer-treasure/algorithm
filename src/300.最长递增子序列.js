/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let dpTable = new Array(nums.length).fill(1)
    let result = dpTable[0]
    for (let i = 1; i < dpTable.length; i++) {
        for (j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dpTable[i] = Math.max(dpTable[i], dpTable[j] + 1)
            }
        }
        result = Math.max(dpTable[i], result)
    }
    return result
};
// @lc code=end

