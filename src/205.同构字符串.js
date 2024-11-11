/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false
    }
    let map = {}
    let map2 = {}
    for(let i = 0; i < s.length; i++) {
        let key = s.charAt(i)
        let value = t.charAt(i)
        if (!map[key]) {
            if (map2[value]) {
                return false
            } else {
                map[key] = value
                map2[value] = key
            }
        } else {
            if (map[key] !== value) {
                return false
            }
        }
    }
    return true
};
// @lc code=end

