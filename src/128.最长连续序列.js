/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0
    }
    let map = new Map()
    for(let num of nums) {
        map.set(num, num + 1)
    }
    let len = 1
    let max = 1
    for(let entry of map.entries()) {
        let [cur, next] = entry
        if (!map.has(cur - 1)) {
            while(map.has(next)) {
                len++
                next = next + 1
            }
            max = len > max ? len : max
            len = 1
        }
    }
    return max
};
// @lc code=end

