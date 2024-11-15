/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @typedef {object} LRUNode
 * @property {object|null} val
 * @property {LRUNode|null} pre
 * @property {LRUNode|null} next
 */
class LRUNode {
    val = null;
    pre = null;
    next = null;

    constructor(value) {
        this.val = value;
    }
}
/**
 * @typedef {object} LRUList
 * @property {LRUNode} dummyHead
 * @property {LRUNode} dummyTail
 * @property {number} length
 * @property {(node: LRUNode) => void} unshift
 * @property {(node: LRUNode) => void} delete
 * @property {() => LRUNode} deleteTail
 * @property {() => void} moveToHead
 */
class LRUList {
    dummyHead = new LRUNode();
    dummyTail = new LRUNode();
    length = 0;
    constructor() {
        this.dummyHead.next = this.dummyTail;
        this.dummyTail.pre = this.dummyHead;
    }
    unshift(node) {
        let oldHead = this.dummyHead.next;
        this.dummyHead.next = node;
        node.pre = this.dummyHead;
        node.next = oldHead;
        oldHead.pre = node;
        this.length += 1;
    }
    delete(node) {
        let pre = node.pre;
        let next = node.next;
        pre.next = next;
        next.pre = pre;
        node.pre = null;
        node.next = null;
        this.length -= 1;
    }
    deleteTail() {
        if (this.length === 0) {
            return;
        }
        let tail = this.dummyTail.pre;
        this.delete(tail);
        return tail
    }
    moveToHead(node) {
        this.delete(node);
        this.unshift(node);
    }
}

class LRUCache {
    list = new LRUList();
    map = new Map();
    capacity = 0;
    constructor(capacity) {
        this.capacity = capacity;
    }

    get(key) {
        if (this.map.has(key)) {
            const node = this.map.get(key);
            this.list.moveToHead(node)
            return node.val.value;
        } else {
            return -1;
        }
    }

    put(key, value) {
        if (this.map.has(key)) {
            let node = this.map.get(key);
            node.val.value = value
            this.list.moveToHead(node);
        } else {
            let node = new LRUNode({ key, value });
            if (this.list.length < this.capacity) {
                this.list.unshift(node);
            } else {
                const deleteNode = this.list.deleteTail();
                this.map.delete(deleteNode.val.key);
                this.list.unshift(node);
            }
            this.map.set(key, node);
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

