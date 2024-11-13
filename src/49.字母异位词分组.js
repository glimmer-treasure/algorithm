/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {}
    strs.forEach((item) => {
        let newStr = Array.from(item).toSorted().join('')
        if (map[newStr]) {
            map[newStr].push(item)
        } else {
            map[newStr] = [item]
        }
    })
    return Object.values(map)
};
// @lc code=end

