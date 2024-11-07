/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i1 = m - 1
    let i2 = n - 1
    let i = m + n -1
    while(i1 >= 0 && i2 >= 0) {
        let a = nums1[i1]
        let b = nums2[i2]
        if (a > b) {
            nums1[i] = a
            i1 --
        } else {
            nums1[i] = b
            i2 --
        }
        i--
    }
    if (i1 < 0) {
        while(i2 >= 0) {
            nums1[i] = nums2[i2]
            i--
            i2--
        }
    }
};
// @lc code=end

