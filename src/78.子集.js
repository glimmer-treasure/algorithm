/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let sets = []
    let combinations = []
    const getSet = (start) => {
        sets.push([...combinations])
        for (let i = start; i < nums.length; i++) {
            combinations.push(nums[i]);
            getSet(i + 1)
            combinations.pop()
        }
    }
    getSet(0)
    return sets
};
// @lc code=end

