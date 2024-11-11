/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let map = new Map()
    let map2 = new Map()
    s = s.split(' ')
    if (pattern.length !== s.length) {
        return false
    }
    for(let i = 0; i < pattern.length; i++) {
        const key = pattern.charAt(i)
        const value = s[i]
        if (!map.has(key)) {
            if (map2.has(value)) {
                return false
            }
            map.set(key, value)
            map2.set(value, key)
        } else {
            if (map.get(key) !== value) {
                return false
            }
        }
    }
    return true
};
// wordPattern("abba", "dog constructor constructor dog")
// @lc code=end

