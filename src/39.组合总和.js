/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let combinations = []
    let combination = []
    let sum = 0
    candidates = candidates.sort((a, b) => a - b);
    const getCombinations = (start) => {
        if (sum === target) {
            combinations.push([...combination])
            return
        }
        for (let i = start; i < candidates.length; i++) {
            combination.push(candidates[i])
            sum += candidates[i]
            if (sum > target) {
                combination.pop()
                sum -= candidates[i]
               return
            }
            getCombinations(i)
            combination.pop()
            sum -= candidates[i]
            
        }
    }
    getCombinations(0)
    return combinations
};
// combinationSum([2,3,5], 8)
// @lc code=end

