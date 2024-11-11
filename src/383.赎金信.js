/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = {}
    for(let i = 0; i < magazine.length; i++) {
        if (!map[magazine.charAt(i)]) {
            map[magazine.charAt(i)] = 1
        } else {
            map[magazine.charAt(i)] = map[magazine.charAt(i)] + 1
        }
    }
    for(let i = 0; i < ransomNote.length; i++) {
        if (map[ransomNote.charAt(i)] === undefined) {
            return false
        } else {
            map[ransomNote.charAt(i)] = map[ransomNote.charAt(i)] - 1
        }
        if (map[ransomNote.charAt(i)] < 0) {
            return false
        }
    }
    return true
};
// @lc code=end

