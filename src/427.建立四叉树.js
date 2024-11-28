/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
function _Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
    this.val = val;
    this.isLeaf = isLeaf;
    this.topLeft = topLeft;
    this.topRight = topRight;
    this.bottomLeft = bottomLeft;
    this.bottomRight = bottomRight;
};
/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var construct = function (grid) {
    const isLeaf = (x1, y1, x2, y2) => {
        let first = grid[x1][y1]
        for (let i = x1; i <= x2; i++) {
            for (let j = y1; j <= y2; j++) {
                if (first !== grid[i][j]) {
                    return false
                }
            }
        }
        return true
    }
    const getTree = (x1, y1, x2, y2) => {
        if (isLeaf(x1, y1, x2, y2)) {
            return new _Node(grid[x1][y1], 1)
        } else {
            let root = new _Node(0, 0)
            let midX = Math.floor((x2 - x1) / 2) + x1
            let midY = Math.floor((y2 - y1) / 2) + y1
            root.topLeft = getTree(x1, y1, midX, midY)
            root.topRight = getTree(x1, midY + 1, midX, y2)
            root.bottomLeft = getTree(midX + 1, y1, x2, midY);
            root.bottomRight = getTree(midX + 1, midY + 1, x2, y2);
            return root
        }
    }
    const rows = grid.length - 1
    const cols = grid[0].length - 1
    return getTree(0, 0, rows, cols)
};

construct([[1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0, 0]])
