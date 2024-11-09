/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let len = s.length
    let index = len - 1
    let words = []
    let next = () => index--
    const parseWord = () => {
        let word = ''
        while(index >= 0) {
            let cur = s.charAt(index)
            if (cur === ' ') {
                break
            } else {
                word = cur + word
            }
            next()
        }
        return word
    }
    while(index >= 0) {
        let cur = s.charAt(index)
        if (cur === ' ') {
            next()
        } else {
            words.push(parseWord())
        }
    }
    return words.join(' ')
};
// @lc code=end

