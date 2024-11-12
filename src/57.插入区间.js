/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (intervals.length === 0) {
        return [newInterval]
    }
    if (newInterval.length === 0) {
        return intervals
    }
    let array = []
    for(let i = 0; i < intervals.length; i++) {
        if (newInterval[1] < intervals[i][0]) {
            array.push(newInterval)
            array.push(intervals[i])
            for(let j = i + 1; j < intervals.length; j++) {
                array.push(intervals[j])
            }
            return array
        } else if (newInterval[0] > intervals[i][1]) {
            array.push(intervals[i])
        } else {
            newInterval[0] = intervals[i][0] > newInterval[0] ? newInterval[0] : intervals[i][0]
            newInterval[1] = intervals[i][1] > newInterval[1] ? intervals[i][1] : newInterval[1]
        }
    }
    array.push(newInterval)
    return array
};
// @lc code=end

