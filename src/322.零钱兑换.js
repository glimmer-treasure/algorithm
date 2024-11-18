/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    if (amount === 0) {
        return 0
    }
    let dpTable = new Array(amount + 1).fill(-1)
    dpTable[0] = 0
    for (let i = 1; i < dpTable.length; i++) {
        for (let coin of coins) {
            if (i < coin || dpTable[i - coin] === -1) {
                continue
            }
            if (dpTable[i] === -1) {
                dpTable[i] = dpTable[i - coin]
            } else {
                dpTable[i] = Math.min(dpTable[i - coin], dpTable[i])
            }
        }
        if (dpTable[i] !== -1) {
            dpTable[i] += 1
        }
    }
    return dpTable[dpTable.length - 1]
};
// @lc code=end

