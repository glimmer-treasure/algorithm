/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    const rows = obstacleGrid.length
    const cols = obstacleGrid[0].length
    let dpTable = new Array(rows)
    for (let i = 0; i < rows; i++) {
        dpTable[i] = new Array(cols).fill(0)
    }
    dpTable[0][0] = obstacleGrid[0][0] === 1 ? 0 : 1
    for (let i = 1; i < rows; i++) {
        if (obstacleGrid[i][0] === 1) {
            dpTable[i][0] = 0
        } else {
            dpTable[i][0] = dpTable[i - 1][0]
        }
    }
    for (let i = 1; i < cols; i++) {
        if (obstacleGrid[0][i] === 1) {
            dpTable[0][i] = 0
        } else {
            dpTable[0][i] = dpTable[0][i - 1]
        }
    }
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            dpTable[i][j] = obstacleGrid[i][j] === 1 ? 0 : dpTable[i - 1][j] + dpTable[i][j - 1]
        }
    }
    return dpTable[rows - 1][cols - 1]
};
// @lc code=end

