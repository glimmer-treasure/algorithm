/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = []
    let list = []
    let permutation = []
    function backtracking(deep, start) {
        if (deep < 1) {
            result.push([...permutation])
            return permutation.pop()
        }
        if (deep > (list.length - start)) {
            return permutation.pop()
        }
        for(let i = start; i < list.length; i++) {
            let ele = list[i]
            permutation.push(ele)
            backtracking(deep - 1, i + 1)
        }
        return permutation.pop()
    }
    for (let i = 1; i <= n; i++) {
        list.push(i)
    }
    backtracking(k, 0, [])
    return result
};

// @lc code=end

