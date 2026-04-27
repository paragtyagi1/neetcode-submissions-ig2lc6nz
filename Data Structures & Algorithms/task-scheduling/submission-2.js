class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let map = {};
        let heap = [];

        // Step 1: frequency map
        for (let task of tasks) {
            map[task] = (map[task] || 0) + 1;
        }

        // Step 2: build max heap
        for (let key in map) {
            this.addToHeap(heap, map[key]);
        }

        let queue = []; // [count, availableTime]
        let time = 0;

        // Step 3: process
        while (heap.length > 0 || queue.length > 0) {
            time++;

            if (heap.length > 0) {
                let count = this.getMaxFromHeap(heap);
                count--;

                if (count > 0) {
                    queue.push([count, time + n]);
                }
            }

            // bring back from cooldown
            if (queue.length > 0 && queue[0][1] === time) {
                let [count] = queue.shift();
                this.addToHeap(heap, count);
            }
        }

        return time;
    }

    addToHeap(heap, value) {
        heap.push(value);
        this.bubbleUp(heap);
    }

    bubbleUp(heap) {
        let i = heap.length - 1;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            if (heap[parent] >= heap[i]) break;

            [heap[i], heap[parent]] = [heap[parent], heap[i]];
            i = parent;
        }
    }

    getMaxFromHeap(heap) {
        if (heap.length === 1) return heap.pop();

        let max = heap[0];
        heap[0] = heap.pop();
        this.bubbleDown(heap);

        return max;
    }

    bubbleDown(heap) {
        let i = 0;
        let length = heap.length;

        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let largest = i;

            if (left < length && heap[left] > heap[largest]) {
                largest = left;
            }

            if (right < length && heap[right] > heap[largest]) {
                largest = right;
            }

            if (largest === i) break;

            [heap[i], heap[largest]] = [heap[largest], heap[i]];
            i = largest;
        }
    }
}