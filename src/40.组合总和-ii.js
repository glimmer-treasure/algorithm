/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let combinations = []
    let combination = []
    let sum = 0
    candidates = candidates.toSorted((a, b) => a - b)
    const getCombinations = (start) => {
        if (sum === target) {
            combinations.push([...combination])
            return
        }
        let usedSet = new Set()
        for(let i = start; i < candidates.length; i++) {
            combination.push(candidates[i])
            sum += candidates[i]
            if (usedSet.has(candidates[i])) {
                combination.pop(candidates[i])
                sum -= candidates[i]
                continue
            }
            usedSet.add(candidates[i])
            if (sum > target) {
                combination.pop(candidates[i])
                sum -= candidates[i]
                return
            }
            getCombinations(i + 1)
            combination.pop(candidates[i])
            sum -= candidates[i]
        }
    }
    getCombinations(0)
    return combinations
};
// combinationSum2([1,1,2], 3)
// @lc code=end

