class Solution {
    networkDelayTime(times, n, k) {

        // Step 1: Build graph
        let graph = new Map();

        for (let i = 1; i <= n; i++) {
            graph.set(i, []);
        }

        for (let [u, v, t] of times) {
            graph.get(u).push([v, t]);
        }

        // Step 2: Distance array
        const dist = new Array(n + 1).fill(Infinity);

        dist[k] = 0; // For the node that is given

        // Step 3: Min Heap
        let minHeap = new MinHeap();

        minHeap.addToHeap(0, k);

        // Step 4: Dijkstra
        while (minHeap.size()) {

            const [time, node] = minHeap.getMin();

            // skip outdated entries
            if (time > dist[node]) {
                continue;
            }

            for (let [nei, weight] of graph.get(node)) {

                const newDist = time + weight;

                // relaxation
                if (newDist < dist[nei]) {

                    dist[nei] = newDist;

                    minHeap.addToHeap(newDist, nei);
                }
            }
        }

        // Step 5: Find maximum shortest distance
        let ans = 0;

        for (let i = 1; i <= n; i++) {

            if (dist[i] === Infinity) {
                return -1;
            }

            ans = Math.max(ans, dist[i]);
        }

        return ans;
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    addToHeap(time, node) {

        this.heap.push([time, node]);

        this.bubbleUp();
    }

    bubbleUp() {

        let i = this.heap.length - 1;

        while (i > 0) {

            let parent = Math.floor((i - 1) / 2);

            if (this.heap[parent][0] <= this.heap[i][0]) {
                break;
            }

            [this.heap[parent], this.heap[i]] =
                [this.heap[i], this.heap[parent]];

            i = parent;
        }
    }

    getMin() {

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        let min = this.heap[0];

        this.heap[0] = this.heap.pop();

        this.bubbleDown();

        return min;
    }

    bubbleDown() {

        let i = 0;

        let length = this.heap.length;

        while (true) {

            let left = 2 * i + 1;
            let right = 2 * i + 2;

            let smallest = i;

            if (
                left < length &&
                this.heap[left][0] < this.heap[smallest][0]
            ) {
                smallest = left;
            }

            if (
                right < length &&
                this.heap[right][0] < this.heap[smallest][0]
            ) {
                smallest = right;
            }

            if (smallest === i) break;

            [this.heap[i], this.heap[smallest]] =
                [this.heap[smallest], this.heap[i]];

            i = smallest;
        }
    }
}