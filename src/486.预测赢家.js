/*
 * @lc app=leetcode.cn id=486 lang=javascript
 *
 * [486] 预测赢家
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
    let table = new DpTable(nums)
    return table.queryTable(0, nums.length - 1) >= 0
};

class DpTable {
    list = []
    table = []
    constructor(nums) {
        this.list = [...nums]
        this.init(nums)
    }

    init() {
        for(let i = 0; i < this.size; i++) {
            this.table[i] = new Array(this.size)
        }
        for (let j = 0; j < this.size; j++) {
            for(let i = 0; i < this.size; i++) {
                let x = i
                let y = i + j
                if (y >= this.size) {
                    break;
                }
                if (x === y) {
                    this.table[x][y] = this.list[x]
                } else {
                    let result = this.list[i] - this.table[x+1][y]
                    let result2 = this.list[y] - this.table[x][y - 1]
                    this.table[x][y] =  Math.max(result, result2)
                }
            }
        }
    }

    get size() {
        return this.list.length
    }

    queryTable(i, j) {
        if ((i > j) || (i < 0) || (j < 0)) {
            return null
        }
        return this.table[i][j]
    }
}
// @lc code=end