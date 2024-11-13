/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map()
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (!map.has(num)) {
            map.set(num, i)
        } else {
            let index = map.get(num)
            let diff = i - index
            if (diff <= k) {
                return true
            } else {
                map.set(num, i)
            }
        }
    }
    return false
};
// @lc code=end

