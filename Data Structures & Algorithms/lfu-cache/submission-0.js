class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.freq = 1;
        this.prev = null;
        this.next = null;
    }
}

class DLL {
    constructor() {
        this.head = new Node();
        this.tail = new Node();

        this.head.next = this.tail;
        this.tail.prev = this.head;

        this.size = 0;
    }

    addFirst(node) {
        node.next = this.head.next;
        node.prev = this.head;

        this.head.next.prev = node;
        this.head.next = node;

        this.size++;
    }

    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;

        this.size--;
    }

    removeLast() {
        if (this.size === 0) return null;

        const node = this.tail.prev;
        this.remove(node);

        return node;
    }
}

class LFUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.minFreq = 0;

        // key -> node
        this.keyMap = new Map();

        // frequency -> DLL
        this.freqMap = new Map();
    }

    /**
     * @param {Node} node
     */
    updateFreq(node) {
        const oldFreq = node.freq;
        const oldList = this.freqMap.get(oldFreq);

        // Remove from old frequency list
        oldList.remove(node);

        // If minimum frequency list becomes empty
        if (oldFreq === this.minFreq && oldList.size === 0) {
            this.minFreq++;
        }

        // Increase frequency
        node.freq++;

        // Create list if it doesn't exist
        if (!this.freqMap.has(node.freq)) {
            this.freqMap.set(node.freq, new DLL());
        }

        // Add to front (most recently used)
        this.freqMap.get(node.freq).addFirst(node);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.keyMap.has(key)) {
            return -1;
        }

        const node = this.keyMap.get(key);

        this.updateFreq(node);

        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     */
    put(key, value) {
        if (this.capacity === 0) return;

        // Key already exists
        if (this.keyMap.has(key)) {
            const node = this.keyMap.get(key);

            node.value = value;
            this.updateFreq(node);

            return;
        }

        // Cache is full
        if (this.size === this.capacity) {
            const minFreqList = this.freqMap.get(this.minFreq);

            // Remove LRU node from minimum frequency
            const removed = minFreqList.removeLast();

            this.keyMap.delete(removed.key);
            this.size--;
        }

        // New nodes always start with frequency 1
        const node = new Node(key, value);

        if (!this.freqMap.has(1)) {
            this.freqMap.set(1, new DLL());
        }

        this.freqMap.get(1).addFirst(node);
        this.keyMap.set(key, node);

        this.minFreq = 1;
        this.size++;
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */