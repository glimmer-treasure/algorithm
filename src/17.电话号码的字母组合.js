/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = new Map([
        ['2', ['a', 'b', 'c']],
        ['3', ['d', 'e', 'f']],
        ['4', ['g', 'h', 'i']],
        ['5', ['j', 'k', 'l']],
        ['6', ['m', 'n', 'o']],
        ['7', ['p', 'q', 'r', 's']],
        ['8', ['t', 'u', 'v']],
        ['9', ['w', 'x', 'y', 'z']],
    ])
    const digitList = digits.split('')
    let combinations = []
    let combine = []
    const getCombinations = (deep) => {
        if (deep === digitList.length) {
            combinations.push(combine.join(''))
            combine.pop()
            return
        }
        let list = map.get(digitList[deep])
        for(let i = 0; i < list.length; i++) {
            combine.push(list[i])
            getCombinations(deep + 1)
        }
        combine.pop()
    }
    if (digits !== '') {
        getCombinations(0)
    }
    return combinations
};
// @lc code=end

