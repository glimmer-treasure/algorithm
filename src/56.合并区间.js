/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] < b[0] ? -1 : 1)
    let currentIntervals = [...intervals[0]]
    let result = []
    for(let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= currentIntervals[1]) {
            let end = intervals[i][1] < currentIntervals[1] ? currentIntervals[1] : intervals[i][1]
            currentIntervals[1] = end
        } else {
            result.push(currentIntervals)
            currentIntervals = [...intervals[i]]
        }
    }
    result.push(currentIntervals)
    return result
};
// @lc code=end

