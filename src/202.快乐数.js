/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const compute = (n) => {
        let sum = 0
        while(n > 0) {
            sum += (n % 10) * (n % 10)
            n = Math.floor(n / 10)      
        }
        return sum
    }
    let set = new Set()
    while(!set.has(n)) {
        set.add(n)
        n = compute(n)
        if (n === 1) {
            return true
        }
    }
    return false
};
// @lc code=end

