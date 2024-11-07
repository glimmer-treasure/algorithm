/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const isValid = (row, col, val) => {
        for(let i = 0; i < 9; i++) {
            if (board[row][i] === val) {
                return false
            }
        }
        for(let i = 0; i < 9; i++) {
            if (board[i][col] === val) {
                return false
            }
        }
        let i = Math.floor(row / 3) * 3
        let j = Math.floor(col / 3) * 3
        for(let k = i; k < i + 3; k++) {
            for(let l = j; l < j + 3; l++) {
                if (board[k][l] === val) {
                    return false
                }
            }
        }
        return true
    }
    const place = () => {
        for (let i = 0; i < 9; i++) {
            for(let j = 0; j < 9; j++) {
                if (board[i][j] !== '.') {
                    continue
                }
                for(let k = 1; k <= 9; k++) {
                    if (!isValid(i, j, `${k}`)) {
                        continue
                    }
                    board[i][j] = `${k}`
                    if (place()) {
                        return true
                    }
                    board[i][j] = '.'
                }
                return false
            }
        }
        return true
    }
    place()
};
// @lc code=end

