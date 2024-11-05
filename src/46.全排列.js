/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let sets = []
    let item = []
    let usedSet = new Set()
    _permute = () => {
        if (item.length === nums.length) {
            sets.push([...item])
        } else {
            for(let i = 0; i < nums.length; i++) {
                let current = nums[i]
                if (usedSet.has(current)) {
                    continue
                } else {
                    item.push(current)
                    usedSet.add(current)
                    _permute()
                    item.pop()
                    usedSet.delete(current)
                }
            }
        }
    }
    _permute()
    return sets
};
// @lc code=end

