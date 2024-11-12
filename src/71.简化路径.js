/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let i = 0
    let tokens = []
    const peek = () => path.charAt(i + 1)
    const peek2 = () => path.charAt(i + 2)
    const next = () => i += 1
    const compile = () => {
        while(i < path.length) {
            if (path.charAt(i) === '/') {
                const isRoot = i === 0
                while(path.charAt(i) === '/') {
                    next()
                }
                if (isRoot) {
                    tokens.push('/')
                }
            } else if (path.charAt(i) === '.') {
                if (['', '/'].includes(peek())) {
                    next()
                    continue
                }
                if (peek() === '.' && ['', '/'].includes(peek2())) {
                    if (tokens.length !== 1) {
                        tokens.pop()
                    }
                    next()
                    next()
                    continue
                }
                let token = '.'
                while(peek() !== '/' && peek() !== '') {
                    next()
                    token += path.charAt(i)
                }
                tokens.push(token)
                next()
            } else {
                let token = path.charAt(i)
                while(peek() !== '/' && peek() !== '') {
                    next()
                    token += path.charAt(i)
                }
                tokens.push(token)
                next()
            }
        }
    }
    compile()
    if (tokens[0] === '/') {
        return '/' + tokens.slice(1).join('/')
    } else {
        return tokens.join('/')
    }
};
// @lc code=end

