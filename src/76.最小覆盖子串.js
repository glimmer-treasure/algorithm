/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s === '' || t === '') {
        return ''
    }
    let tMap = new Map()
    let sMap = new Map()
    for(let i = 0; i < t.length; i++) {
        let key = t.charAt(i)
        if (tMap.has(key)) {
            let val = tMap.get(key)
            tMap.set(key, val + 1)
        } else {
            tMap.set(key, 1)
        }
    }
    let tCount = tMap.size
    let sCount = 0
    let right = 0
    let left = 0
    let minLen = Number.MAX_SAFE_INTEGER
    while(right < s.length) {
        let key = s.charAt(right)
        if (tMap.has(key)) {
            if (!sMap.has(key)) {
                sMap.set(key, 1)
            } else {
                let val = sMap.get(key)
                sMap.set(key, val + 1)
            }
            if (sMap.get(key) === tMap.get(key)) {
                sCount++
            }
        }
        while(sCount === tCount) {
            let key = s.charAt(left)
            let len = right - left + 1
            if (len < minLen) {
                minLen = len
                minStart = left
            }
            if (tMap.has(key)) {
                let val = sMap.get(key)
                sMap.set(key, val - 1)
                if (sMap.get(key) < tMap.get(key)) {
                    sCount -= 1
                }
            }
            left += 1
        }
        right += 1
    }
    if (minLen === Number.MAX_SAFE_INTEGER) {
        return ''
    } else {
        return s.slice(minStart, minStart + minLen)
    }
};
// @lc code=end

