/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const count = matrix[0].length * matrix.length
    let top = 0
    let right = matrix[0].length - 1
    let bottom = matrix.length - 1
    let left = 0
    let i = 0
    let j = 0
    let path = []
    const isInMatrix = () => i >= top && i <= bottom && j >= left && j <= right
    let travelTop = () => {
        if (!isInMatrix()) {
            return
        }
        while(isInMatrix()) {
            path.push(matrix[i][j])
            j += 1
        }
        j -= 1
        i += 1
        top += 1
    }
    let travelRight = () => {
        if (!isInMatrix()) {
            return
        }
        while(isInMatrix()) {
            path.push(matrix[i][j])
            i += 1
        }
        i -= 1
        j -= 1
        right -= 1

    }
    let travelBottom = () => {
        if (!isInMatrix()) {
            return
        }
        while(isInMatrix()) {
            path.push(matrix[i][j])
            j -= 1
        }
        j += 1
        i -= 1
        bottom -= 1
    }
    let travelLeft = () => {
        if (!isInMatrix()) {
            return
        }
        while(isInMatrix()) {
            path.push(matrix[i][j])
            i -= 1
        }
        i += 1
        j += 1
        left++
    }
    while(path.length < count) {
        travelTop()
        travelRight()
        travelBottom()
        travelLeft()
    }
    return path
};
// @lc code=end

