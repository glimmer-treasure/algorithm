/*
 * @lc app=leetcode.cn id=332 lang=javascript
 *
 * [332] 重新安排行程
 */

// @lc code=start
const initTicketMap = (tickets) => {
    let map = {}
    tickets.forEach((ticket) => {
        const [from, to] = ticket
        if (map[from]) {
            map[from][to] = (map[from][to] ?? 0) + 1
        } else {
            map[from] = {
                [to]: 1
            }
        }
    })
    Object.keys(map).forEach((from) => {
        let newMap = {}
        Object.keys(map[from]).toSorted().forEach((destination) => {
            newMap[destination] = map[from][destination]
        })
        map[from] = newMap
    })
    return map
}
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    let path = ['JFK']
    let pathLength = tickets.length + 1
    let ticketMap = initTicketMap(tickets)
    const findPath = (from) => {
        if (path.length === pathLength) {
            return true
        }
        let targetMap = ticketMap[from]
        if (!targetMap) {
            return false
        }
        const targets = Object.keys(targetMap) 
        for(let i = 0; i < targets.length; i++) {
            const target = targets[i]
            if (targetMap[target] > 0) {
                path.push(target)
                targetMap[target]--
                if (findPath(target)) {
                    return true
                }
                path.pop()
                targetMap[target]++
            }
        }
        return false
    }
    findPath('JFK', tickets)
    return path
};
// @lc code=end

