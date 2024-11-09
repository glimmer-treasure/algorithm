/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let count = 0
    let index = 0
    let len = s.length
    const next = () => index += 1
    const peek = () => s.charAt(index + 1)
    const parseI = () => {
        let pre = peek()
        if (pre === 'V') {
            next()
            count += 4
        } else if (pre === 'X') {
            next()
            count += 9
        } else {
            count += 1
        }
        next()
    }
    const parseX = () => {
        let pre = peek()
        if (pre === 'L') {
            next()
            count += 40
        } else if (pre === 'C') {
            next()
            count += 90
        } else {
            count += 10
        }
        next()
    }
    const parseC = () => {
        let pre = peek()
        if (pre === 'D') {
            next()
            count += 400
        } else if (pre === 'M') {
            next()
            count += 900
        } else {
            count += 100
        }
        next()
    }
    while(index < len) {
        let cur = s.charAt(index)
        switch(cur) {
            case 'I':
                parseI();
                break
            case 'V':
                count += 5
                next()
                break
            case 'X':
                parseX();
                break
            case 'L':
                count += 50
                next()
                break
            case 'C':
                parseC();
                break
            case 'D':
                count += 500
                next()
                break
            case 'M':
                count += 1000
                next()
                break
        }
    }
    return count
};
// @lc code=end

