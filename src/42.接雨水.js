/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
function solution(height) {
    class Stack {
        stack = []
        constructor(array) {
            this.stack = [...array]
        }
        top() {
            return this.stack[this.length - 1]
        }
        pop() {
            return this.stack.pop()
        }
        push(...args) {
            return this.stack.push(...args)
        }
        get isEmpty() {
            return this.stack.length <= 0
        }
        get length() {
            return this.stack.length
        }
    }
    let stack = new Stack([0])
    let sum = 0
    for(i = 1; i < height.length; i++) {
        let stIdx = stack.pop()
        let stMin = height[stIdx]
        if (height[i] < stMin) {
            stack.push(stIdx, i)
        } else if (height[i] > stMin) {
            while(!stack.isEmpty) {
                const w = i - stack.top() - 1
                const h = Math.min(height[stack.top()], height[i]) - stMin
                sum += w * h
                stIdx = stack.pop()
                stMin = height[stIdx]
                if (height[i] <= stMin) {
                    stack.push(stIdx)
                    break
                }
            }
            stack.push(i)
        } else {
            stack.push(i)
        }
    }
    return sum
}

function solution1(height) {
    let leftStack = []
    let rightStack = []
    let sum = 0
    for(let i = 0; i < height.length; i++) {
        if (i === 0) {
            leftStack[i] = height[i]
        } else {
            leftStack[i] = Math.max(leftStack[i - 1], height[i])
        }
    }
    for(let i = (height.length - 1); i >= 0; i--) {
        if (i === (height.length - 1)) {
            rightStack[i] = height[i]
        } else {
            rightStack[i] = Math.max(rightStack[i+1], height[i])
        }
    }
    for (let i = 1; i < (height.length - 1); i++) {
        sum += Math.min(leftStack[i], rightStack[i]) - height[i]
    }
    return sum
}
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // 单调栈解法
    // return solution(height)
    // 双指针解法
    return solution1(height)
};
// @lc code=end
trap([4,2,0,3,2,5])


