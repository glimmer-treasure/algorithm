/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let list = [1,2,3,4,5,6,7,8,9]
    let element = []
    let sum = 0
    let combinations = []
    const back = () => {
        let top = element.pop()
        sum -= top
    }
    function getCombinations(deep, start) {
        if (sum > n) {
            back()
            return
        }
        if (deep < 1) {
            if (sum === n) {
                combinations.push([...element])
            }
            back()
            return
        }
        if (deep > (list.length - start)) {
            back()
            return
        }
        for(let i = start; i < list.length; i++) {
            element.push(list[i])
            sum += list[i]
            getCombinations(deep - 1, i + 1)
        }
        back()
        return
    }
    getCombinations(k, 0)
    return combinations
};
// combinationSum3(9, 45)
// @lc code=end

