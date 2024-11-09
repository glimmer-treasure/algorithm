/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let len = ratings.length
    let results = new Array(len).fill(1)
    for(let i = 1; i < len; i++) {
        if (ratings[i] > ratings[i - 1]) {
            results[i] = results[i - 1] + 1
        }
    }
    for(let i = (len - 2); i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            let nums = results[i + 1] + 1
            results[i] = Math.max(results[i], nums)
        }
    }
    return results.reduce((pre, cur) => pre + cur, 0)
};
// @lc code=end

