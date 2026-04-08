class MedianFinder {
    constructor() {
        this.small = new MaxPriorityQueue(); // max heap (smaller half)
        this.large = new MinPriorityQueue(); // min heap (larger half)
    }

    /**
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        // Step 1: add to maxHeap
        this.small.enqueue(num);

        // Step 2: move largest → minHeap
        this.large.enqueue(this.small.dequeue());

        // Step 3: balance sizes
        if (this.large.size() > this.small.size()) {
            this.small.enqueue(this.large.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.small.size() > this.large.size()) {
            return this.small.front();
        }
        return (this.small.front() + this.large.front()) / 2;
    }
}