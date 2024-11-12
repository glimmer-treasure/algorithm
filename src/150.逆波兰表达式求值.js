/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    for(let token of tokens) {
        if (token === '+') {
            let num2 = stack.pop()
            let num1 = stack.pop()
            stack.push(num1 + num2)
        } else if (token === '-') {
            let num2 = stack.pop()
            let num1 = stack.pop()
            stack.push(num1 - num2)
        } else if (token === '*') {
            let num2 = stack.pop()
            let num1 = stack.pop()
            stack.push(num1 * num2)
        } else if (token === '/') {
            let num2 = stack.pop()
            let num1 = stack.pop()
            let result = num1 / num2
            stack.push(result > 0 ? Math.floor(result) : Math.ceil(result))
        } else {
            stack.push(Number(token))
        }
    }
    return stack[0]
};
// @lc code=end

