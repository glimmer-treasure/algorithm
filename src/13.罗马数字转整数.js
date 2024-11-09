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
    let nums = []
    let index = 0
    let len = s.length
    const next = () => index += 1
    const peek = () => s.charAt(index + 1)
    const parseI = () => {
        let pre = peek()
        if (pre === 'V') {
            next()
            nums.push(4)
        } else if (pre === 'X') {
            next()
            nums.push(9)
        } else {
            nums.push(1)
        }
        next()
    }
    const parseX = () => {
        let pre = peek()
        if (pre === 'L') {
            next()
            nums.push(40)
        } else if (pre === 'C') {
            next()
            nums.push(90)
        } else {
            nums.push(10)
        }
        next()
    }
    const parseC = () => {
        let pre = peek()
        if (pre === 'D') {
            next()
            nums.push(400)
        } else if (pre === 'M') {
            next()
            nums.push(900)
        } else {
            nums.push(100)
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
                nums.push(5)
                next()
                break
            case 'X':
                parseX();
                break
            case 'L':
                nums.push(50)
                next()
                break
            case 'C':
                parseC();
                break
            case 'D':
                nums.push(500)
                next()
                break
            case 'M':
                nums.push(1000)
                next()
                break
        }
    }
    return nums.reduce((pre, cur) => pre + cur, 0)
};
// @lc code=end

