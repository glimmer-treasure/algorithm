/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let left = 0
    let right = matrix.length - 1
    let temp = 0
    while(left <= right) {
        for(let i = 0; i < (right - left); i++) {
            temp = matrix[left][left + i]
            matrix[left][left + i] = matrix[right - i][left]
            matrix[right - i][left] = matrix[right][right - i]
            matrix[right][right - i] = matrix[left + i][right]
            matrix[left + i][right] = temp
        }
        left++
        right--
    }
};
// @lc code=end

