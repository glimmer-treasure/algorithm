/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 */

// @lc code=start
class WordTree {
    children = new Map()
    word = ''
    letter = ''

    constructor(val) {
        this.letter = val
    }

    insert(word) {
        let node = this
        let i = 0
        while (i < word.length) {
            let cur = word.charAt(i)
            if (!node.children.has(cur)) {
                let wordNode = new WordTree(cur)
                node.children.set(cur, wordNode)
            }
            node = node.children.get(cur)
            i++
        }
        node.word = word
    }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    let left = 0
    let right = board[0].length - 1
    let top = 0
    let bottom = board.length - 1
    let result = new Set()
    const isOverflow = (x, y) => x < top || x > bottom || y < left || y > right
    const dfs = (x, y, wordNode, visited) => {
        if (isOverflow(x, y) || visited.has(`${x},${y}`) || !wordNode.children.has(board[x][y])) {
            return
        }
        let node = wordNode.children.get(board[x][y])
        if (node.word) {
            result.add(node.word)
        }
        visited.add(`${x},${y}`)
        dfs(x - 1, y, node, visited)
        dfs(x + 1, y, node, visited)
        dfs(x, y - 1, node, visited)
        dfs(x, y + 1, node, visited)
        visited.delete(`${x},${y}`)
    }
    let root = new WordTree()
    let visited = new Set()
    for (let word of words) {
        root.insert(word)
    }
    for (let i = 0; i <= bottom; i++) {
        for (let j = 0; j <= right; j++) {
            dfs(i, j, root, visited)
        }
    }
    return [...result.values()]
};

// @lc code=end

