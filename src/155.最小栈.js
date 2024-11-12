/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
class MinStack {
    stack = []
    minStack = []
    push(val) {
        let topIndex = this.topIndex
        if (topIndex < 0 ) {
            this.stack.push(val)
            this.minStack.push(val)
        } else if (val < this.minStack[topIndex]) {
            this.stack.push(val)
            this.minStack.push(val)
        } else {
            this.stack.push(val)
            this.minStack.push(this.minStack[topIndex])
        }
    }
    pop() {
        this.stack.pop()
        this.minStack.pop()
    }
    top() {
        return this.stack[this.topIndex]
    }
    getMin() {
        return this.minStack[this.topIndex]
    }
    get topIndex () {
        return this.stack.length - 1
    }
}
/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

