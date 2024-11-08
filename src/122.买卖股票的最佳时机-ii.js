/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let dpTable = []
    const len = prices.length
    for(let i = 0; i < len; i++) {
        dpTable[i] = [0, 0]
        if (i === 0) {
            dpTable[i][0] = 0
            dpTable[i][1] = -prices[i]
        } else {
            dpTable[i][0] = Math.max(dpTable[i - 1][0], dpTable[i - 1][1] + prices[i])
            dpTable[i][1] = Math.max(dpTable[i - 1][1], dpTable[i - 1][0] - prices[i])
        }
    }
    return dpTable[len - 1][0]
};
// @lc code=end

