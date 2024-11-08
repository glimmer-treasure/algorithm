/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let dpTable = new Array(prices.length)
    for(let i = 0; i < dpTable.length; i++) {
        dpTable[i] = [0, 0]
        if (i === 0) {
            dpTable[i][0] = 0
            dpTable[i][1] = -prices[0]
        } else {
            dpTable[i][0] = Math.max(dpTable[i - 1][0], dpTable[i - 1][1] + prices[i])
            dpTable[i][1] = Math.max(dpTable[i-1][1], -prices[i])
        }
    }
    return dpTable[prices.length - 1][0]
};
// @lc code=end

