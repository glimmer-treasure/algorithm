/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let result = new Array(temperatures.length).fill(0)
    let stack = []
    temperatures.forEach((ele, index) => {
        let stIndex = stack.pop()
        let st = temperatures[stIndex]
        while(ele > st && stIndex !== undefined) {
            result[stIndex] = index - stIndex
            stIndex = stack.pop()
            st = temperatures[stIndex]
        }
        if (stIndex === undefined) {
            stack.push(index)
        } else if (ele <= st) {
            stack.push(stIndex)
            stack.push(index)
        }
    })
    return result
};
// @lc code=end
