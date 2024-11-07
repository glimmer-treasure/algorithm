/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let positions = []
    let rouds = []
    let chessboard = []
    for(let i = 0; i < n; i++) {
        chessboard.push(new Array(n).fill('.'))
    }
    const canAttack = (x, y) => {
        // 同行是否有皇后
        for(let i = 0; i < n; i++) {
            if (i !== y && chessboard[x][i] === 'Q') {
                return true
            }
        }
        // 同列是否有皇后
        for(let i = 0; i < n; i++) {
            if (i !== x && chessboard[i][y] === 'Q') {
                return true
            }
        }
        // 斜线上是否有皇后
        let i = x
        let j = y
        while(i >= 0 && j >= 0) {
            if (i !== x && j !== y && chessboard[i][j] === 'Q') {
                return true
            }
            i--
            j--
        }
        i = x
        j = y
        while(i < n && j < n) {
            if (i !== x && j !== y && chessboard[i][j] === 'Q') {
                return true
            }
            i++
            j++
        }
        i = x
        j = y
        while(i >= 0 && j < n) {
            if (i !== x && j !== y && chessboard[i][j] === 'Q') {
                return true
            }
            i--
            j++
        }
        i = x
        j = y
        while(i < n && j >= 0) {
            if (i !== x && j !== y && chessboard[i][j] === 'Q') {
                return true
            }
            i++
            j--
        }
        return false
    }
    const place = (row) => {
        if (positions.length === n) {
            return rouds.push(positions.slice())
        } else {
            for(let i = row; i < n; i++) {
                for(let j = 0; j < n; j++) {
                    if (canAttack(i, j)) {
                        continue
                    }
                    chessboard[i][j] = 'Q'
                    positions.push(chessboard[i].join(''))
                    place(i + 1)
                    chessboard[i][j] = '.'
                    positions.pop()
                }
            }
        }
    }
    place(0)
    return rouds
};
// @lc code=end

