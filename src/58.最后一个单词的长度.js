/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let index = 0
    let word = ''
    let lastWord = ''
    const len = s.length
    const next = () => index++
    const parseWord = () => {
        while(s.charAt(index) !== ' ' && index < len) {
            word += s.charAt(index)
            next()
        }
        lastWord = word
        word = ''
    }
    while(index < len) {
        let cur = s.charAt(index)
        if (cur === ' ') {
            next()
        } else {
            parseWord()
        }
    }
    return lastWord.length
};
// lengthOfLastWord('Hello World')
// @lc code=end

