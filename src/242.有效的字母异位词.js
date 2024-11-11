/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map = {}
    for(let i = 0; i < s.length; i++) {
        if (map[s.charAt(i)]) {
            map[s.charAt(i)] += 1
        } else {
            map[s.charAt(i)] = 1
        }
    }
    for(let i = 0; i < t.length; i++) {
        if (map[t.charAt(i)]) {
            map[t.charAt(i)] -= 1
        } else {
           return false
        }
    }
    return Object.values(map).reduce((pre, cur) => pre + cur, 0) === 0
};
// @lc code=end

