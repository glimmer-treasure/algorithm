/*
 * @lc app=leetcode.cn id=227 lang=typescript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
enum TokenKind {
  Operator,
  DigitLiteral,
}

const isOperator = (char: string) => ["*", "/"].includes(char);

const isWhitespace = (char: string) => /[\s\t\n]/.test(char);

class CharStream {
  stream: string;
  index: number;
  constructor(source: string) {
    this.stream = source;
    this.index = 0;
  }
  peek(): string {
    return this.stream.charAt(this.index);
  }
  next() {
    this.index++;
  }
}

class Tokenizer {
  charStream: CharStream;
  constructor(charStream: CharStream) {
    this.charStream = charStream;
  }
  getAToken() {
    this.skipWhitespaces();
    const char = this.charStream.peek();
    if (!char) {
      return null;
    } else if (isOperator(char)) {
      return this.parseOperator();
    } else {
      return this.parseDigitLiteral();
    }
  }

  parseDigitLiteral() {
    let digitStr = this.charStream.peek();
    if (digitStr === "+") {
      this.charStream.next();
      digitStr = this.charStream.peek();
    }
    this.charStream.next();
    let char = this.charStream.peek();
    while (/[0-9]/.test(char)) {
      digitStr += char;
      this.charStream.next();
      char = this.charStream.peek();
    }
    return Number(digitStr);
  }

  parseOperator() {
    let char = this.charStream.peek();
    this.charStream.next();
    return char;
  }

  skipWhitespaces() {
    let char = this.charStream.peek();
    while (isWhitespace(char)) {
      this.charStream.next();
      char = this.charStream.peek();
    }
  }
}

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s: string): number {
  let tokenizer = new Tokenizer(new CharStream(s));
  let valueStack: Array<number> = [];
  let token = tokenizer.getAToken();
  while (![undefined, null].includes(token)) {
    if (token === "*" || token === "/") {
      let top = valueStack.pop();
      let nextDigitToken = tokenizer.getAToken() as number;
      switch (token) {
        case "*":
          top = top * nextDigitToken;
          break;
        default:
          top = (top / nextDigitToken) | 0;
      }
      valueStack.push(top);
    } else {
      valueStack.push(token as number);
    }
    token = tokenizer.getAToken();
  }
  return valueStack.reduce((prev, cur) => {
    return prev + cur;
  }, 0);
};
// @lc code=end
