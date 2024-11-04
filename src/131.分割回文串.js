/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const isPalindrome = (s) => {
        let left = 0
        let right = s.length - 1
        while(left < right) {
            if (s[left]!== s[right]) {
                return false
            }
            left++
            right--
        }
        return true
    }
    let path = []
    let all = []
    const splitStr = (start) => {
        if (start >= s.length ) {
            all.push(path.slice(0))
            return
        } else {
            for(let i = start; i < s.length; i++) {
                const substr = s.slice(start, i+1)
                if (!isPalindrome(substr)) {
                    continue
                }
                path.push(substr)
                splitStr(i+1)
                path.pop()
            }
        }
    }
    splitStr(0)
    return all
};
// @lc code=end

