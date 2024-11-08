/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let cover = 0
    let next = 0
    let len = nums.length
    let lastIndex = len - 1
    let result = 0
    if (len === 1) {
        return 0
    }
    for(let i = 0; i < len; i++) {
        next = Math.max(next, i + nums[i])
        if (i === cover) {
            cover = next
            result++
            if (cover >= lastIndex) {
                return result
            }
        }
    }
};
// @lc code=end

