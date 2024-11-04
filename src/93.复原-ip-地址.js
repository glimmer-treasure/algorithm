/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let ip = []
    let ips = []
    let isValid = (str) => {
        if (str.length > 1 && str[0] === '0') {
            return false
        }
        if (Number(str) > 255) {
            return false
        }
        return true
    }
    const split = (start) => {
        if (start >= s.length) {
            return
        }
        if (ip.length === 3) {
            const subIp = s.slice(start)
            if (isValid(subIp)) {
                ips.push([...ip, subIp].join('.'))
            }
            return
        }
        for(let i = start; i < s.length; i++) {
            let subIp = s.slice(start, i + 1)
            if (!isValid(subIp)) {
                return
            }
            ip.push(subIp)
            split(i + 1)
            ip.pop()
        }
    }
    split(0)
    return ips
};
// @lc code=end

