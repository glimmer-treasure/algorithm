/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 非递减子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    let sequences = []
    let sequence = []
    const getSequence = (start) => {
        if (sequence.length >= 2) {
            sequences.push([...sequence])
        }
        let set = new Set()
        for (let i = start; i < nums.length; i++) {
            let current = nums[i]
            let prev = sequence[sequence.length - 1]
            if (set.has(current)) {
                continue
            }
            set.add(current)
            if (prev === undefined || prev <= current) {
                sequence.push(current)
                getSequence(i + 1)
                sequence.pop()
            }
        }
    }
    getSequence(0)
    return sequences
};
// @lc code=end

