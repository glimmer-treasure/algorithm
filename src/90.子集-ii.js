/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let sets = []
    let combination = []
    nums = nums.sort((a, b) => a - b)
    const getSubset = (start) => {
        sets.push([...combination])
        for(let i = start; i < nums.length; i++) {
            if (i > start && (nums[i] === nums[i-1])) {
                continue;
            }
            combination.push(nums[i])
            getSubset(i + 1)
            combination.pop()
        }
    }
    getSubset(0)
    return sets
};
// @lc code=end

