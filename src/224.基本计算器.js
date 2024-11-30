/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
const PriorityMap = new Map([
    ['+', 1],
    ['-', 1],
    ['*', 2],
    ['/', 2],
])

const isUndef = (val) => [undefined, null].includes(val)

class Tokenizer {
    source = ''
    index = 0
    constructor(source) {
        this.source = source
    }
    next() {
        this.index += 1
    }
    getAToken() {
        if (!this.char) {
            return null
        }
        if (/[0-9]/.test(this.char)) {
            return this.parseNumber()
        }
        if (['+', '-', '*', '/'].includes(this.char)) {
            const token = this.char
            this.next()
            return token
        }
        if (['(', ')'].includes(this.char)) {
            const token = this.char
            this.next()
            return token
        }
        if (/\s/.test(this.char)) {
            this.next()
            return this.getAToken()
        }
        throw new Error(`${this.char} is invalid char`)
    }
    parseNumber() {
        let cur = this.char
        while (/[0-9]/.test(this.peek)) {
            this.next()
            cur += this.char
        }
        this.next()
        return Number(cur)
    }
    get peek() {
        return this.source.charAt(this.index + 1)
    }
    get char() {
        return this.source.charAt(this.index)
    }
}

class Parser {
    tokenizer = null
    tokens = []
    constructor(source) {
        this.tokenizer = new Tokenizer(source)
    }
    getAToken() {
        let token = this.tokens.shift()
        if (isUndef(token)) {
            return this.tokenizer.getAToken()
        }
        return token
    }
    peek() {
        let token = this.tokens[0]
        if (isUndef(token)) {
            token = this.tokenizer.getAToken()
            this.tokens.push(token)
        }
        return token
    }
    peek2() {
        let token = this.tokens[1]
        if (isUndef(token)) {
            token = this.tokenizer.getAToken()
            this.tokens[1] = token
        }
        return token
    }
}

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    const parser = new Parser(s)
    const valueStack = []
    const operatorStack = []
    const compute = () => {
        const top = operatorStack.pop()
        let num2 = valueStack.pop()
        let num1 = valueStack.pop()
        switch (top) {
            case '+':
                num1 = num1 + num2
                break
            case '-':
                num1 = num1 - num2
                break
            case '*':
                num1 = num1 * num2
                break
            case '/':
                num1 = Number.floor(num1 / num2)
                break
        }
        valueStack.push(num1)
    }
    if (['+', '-'].includes(parser.peek())) {
        valueStack.push(0)
    }
    let token = parser.getAToken()
    while (token !== null) {
        if (typeof token === 'number') {
            valueStack.push(token)
        } else if (token === '(') {
            operatorStack.push(token)
            if (['+', '-'].includes(parser.peek())) {
                valueStack.push(0)
            }
        } else if (token === ')') {
            let top = operatorStack.at(-1)
            while (top && top !== '(') {
                compute()
                top = operatorStack.at(-1)
            }
            if (top === '(') {
                operatorStack.pop()
            }
        } else {
            let top = operatorStack.at(-1)
            while (top && PriorityMap.get(top) >= PriorityMap.get(token)) {
                compute()
                top = operatorStack.at(-1)
            }
            operatorStack.push(token)
        }
        token = parser.getAToken()
    }
    while (operatorStack.length > 0) {
        compute()
    }
    return valueStack[0]
};
// @lc code=end

