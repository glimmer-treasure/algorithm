/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let sets = []
    let item = []
    let indexSet = new Set()
    nums = nums.sort((a, b) => a - b)
    const permute = () => {
        if (item.length === nums.length) {
            sets.push([...item])
        } else {
            for(let i = 0; i < nums.length; i++) {
                const current = nums[i]
                if (i > 0 && (current === nums[i-1]) && !indexSet.has(i -1)) {
                    continue
                }
                if (indexSet.has(i)) {
                    continue
                }
                indexSet.add(i)
                item.push(current)
                permute()
                item.pop()
                indexSet.delete(i)
            }
        }
    }
    permute()
    return sets
};
// @lc code=end

