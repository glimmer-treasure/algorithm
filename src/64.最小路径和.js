/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const rows = grid.length
    const cols = grid[0].length
    let dpTable = new Array(rows)
    for (let i = 0; i < dpTable.length; i++) {
        dpTable[i] = new Array(cols).fill(Number.MAX_SAFE_INTEGER)
    }
    dpTable[0][0] = grid[0][0]
    for (let i = 1; i < cols; i++) {
        dpTable[0][i] = dpTable[0][i - 1] + grid[0][i]
    }
    for (let i = 1; i < rows; i++) {
        dpTable[i][0] = dpTable[i - 1][0] + grid[i][0]
    }
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            dpTable[i][j] = Math.min(dpTable[i - 1][j], dpTable[i][j - 1]) + grid[i][j]
        }
    }
    return dpTable[rows - 1][cols - 1]
};
// @lc code=end

