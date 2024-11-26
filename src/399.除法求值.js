/*
 * @lc app=leetcode.cn id=399 lang=javascript
 *
 * [399] 除法求值
 */

// @lc code=start
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    let map = new Map()
    for (let i = 0; i < equations.length; i++) {
        const [val, val2] = equations[i]
        if (!map.has(val)) {
            map.set(val, new Map())
        }
        map.get(val).set(val2, values[i])
        if (!map.has(val2)) {
            map.set(val2, new Map())
        }
        map.get(val2).set(val, 1 / values[i])
    }
    const dfs = (val, val2, visited) => {
        if (!map.has(val)) {
            return -1
        }
        let map2 = map.get(val)
        visited.add(val)
        if (map2.has(val2)) {
            return map2.get(val2)
        }
        for (let value of map2.keys()) {
            if (visited.has(value)) {
                continue
            }
            let result = dfs(value, val2, visited)
            if (result !== -1) {
                return map2.get(value) * result
            }
        }
        return -1
    }
    return queries.map((query) => dfs(query[0], query[1], new Set()))
};
// @lc code=end

