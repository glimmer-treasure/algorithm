/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if (points.length === 0) {
        return 0
    }
    points.sort((a, b) => a[0] < b[0] ? -1 : 1)
    let result = 1
    for(let i = 1; i < points.length; i++) {
        const pre = points[i -1]
        const cur = points[i]
        if (pre[1] < cur[0] ) {
            result++
        } else {
            cur[1] = cur[1] <= pre[1] ? cur[1] : pre[1]
        }
    }
    return result
};
// @lc code=end

