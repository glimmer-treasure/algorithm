/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 1
    let slow = 0
    for(let i = 1; i < nums.length; i++) {
       if (nums[i] === nums[slow]) {
            if (count < 2) {
                slow++
                nums[slow] = nums[i]
            }
            count++
       } else {
            slow++
            nums[slow] = nums[i]
            count = 1
       }
    }
    return slow + 1
};
// @lc code=end

