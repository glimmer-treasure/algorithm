/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let len = gas.length
    let sum = 0
    let total = 0
    let start = 0
    for(let i = 0; i < len; i++) {
        sum = sum + gas[i] - cost[i]
        total = total + gas[i] - cost[i]
        if (sum < 0) {
            start = i + 1
            sum = 0
        }
    }
    if (total < 0) {
        return -1
    }
    return start
};
// @lc code=end

