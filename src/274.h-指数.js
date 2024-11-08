/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H 指数
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations = citations.toSorted((a, b) => a > b ? -1 : 1)
    let len = citations.length
    let h = 1
    for(let i = 0; i < len; i++) {
        const citation = citations[i]
        if (h <= citation) {
            h++
            continue
        }
        break
    }
    return h - 1
};
// @lc code=end

