/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 1
    let majority = nums[0]
    for(let i = 1; i< nums.length; i++) {
        const current = nums[i]
        if (current === majority) {
            count += 1
        } else {
            if (count > 0) {
                count -= 1
            } else {
                majority = current
                count = 1
            }
        }
    }
    return majority
};
// @lc code=end

