/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let dpTable = new Array(triangle.length)
    for (let i = 0; i < dpTable.length; i++) {
        dpTable[i] = new Array(triangle[i].length).fill(Number.MAX_SAFE_INTEGER)
    }
    const height = triangle.length - 1
    for (let i = 0; i < triangle[height].length; i++) {
        dpTable[height][i] = triangle[height][i]
    }
    for (let level = height - 1; level >= 0; level--) {
        for (let i = 0; i < triangle[level].length; i++) {
            dpTable[level][i] = Math.min(dpTable[level + 1][i], dpTable[level + 1][i + 1]) + triangle[level][i]
        }
    }
    return dpTable[0][0]
};
// @lc code=end

