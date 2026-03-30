class Solution {
    lastStoneWeight(stones) {
        this.heap = stones;

        // FIXED heapify loop
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.heapify(i);
        }

        while (this.heap.length > 1) {
            let stone1 = this.extractMax();
            let stone2 = this.extractMax();

            if (stone1 !== stone2) {
                this.addToHeap(stone1 - stone2);
            }
        }

        return this.heap.length ? this.heap[0] : 0;
    }

    // ✅ NEW: Proper extractMax
    extractMax() {
        if (this.heap.length === 1) return this.heap.pop();

        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();

        return max;
    }

    // ✅ FIXED → MAX HEAP bubbleDown
    bubbleDown() {
        let i = 0;
        let length = this.heap.length;

        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let largest = i;

            if (left < length && this.heap[left] > this.heap[largest]) {
                largest = left;
            }

            if (right < length && this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            if (largest === i) break;

            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
            i = largest;
        }
    }

    heapify(i) {
        let length = this.heap.length;

        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let largest = i;

            if (left < length && this.heap[left] > this.heap[largest]) {
                largest = left;
            }

            if (right < length && this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            if (largest === i) break;

            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
            i = largest;
        }
    }

    addToHeap(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let i = this.heap.length - 1;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            // MAX HEAP
            if (this.heap[parent] >= this.heap[i]) break;

            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
            i = parent;
        }
    }
}