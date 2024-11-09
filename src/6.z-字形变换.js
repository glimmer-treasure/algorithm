/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s
    }
    let row = 0
    let col = 0
    let direction = 0
    let len = s.length
    let index = 0
    let matrix = new Array(numRows)
    for(let i = 0; i < numRows; i++) {
        matrix[i] = []
    }
    while(index < len) {
        matrix[row][col] = s.charAt(index)
        if (row === (numRows - 1)) {
            direction = 1
        }
        if (row === 0 && col > 0) {
            direction = 0
        }
        if (direction === 0) {
            row++
        } else {
            row--
            col++
        }
        index++
    }
    return matrix.map((item) => item.join('')).join('')
};
// @lc code=end

