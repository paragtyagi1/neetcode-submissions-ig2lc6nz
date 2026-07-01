class FreqStack {
    constructor() {
        // value -> frequency
        this.freq = new Map();

        // frequency -> stack of values
        this.group = new Map();

        // current maximum frequency
        this.maxFreq = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const f = (this.freq.get(val) || 0) + 1;
        this.freq.set(val, f);

        if (!this.group.has(f)) {
            this.group.set(f, []);
        }

        this.group.get(f).push(val);

        this.maxFreq = Math.max(this.maxFreq, f);
    }

    /**
     * @return {number}
     */
    pop() {
        const stack = this.group.get(this.maxFreq);
        const val = stack.pop();

        this.freq.set(val, this.freq.get(val) - 1);

        if (stack.length === 0) {
            this.group.delete(this.maxFreq);
            this.maxFreq--;
        }

        return val;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
