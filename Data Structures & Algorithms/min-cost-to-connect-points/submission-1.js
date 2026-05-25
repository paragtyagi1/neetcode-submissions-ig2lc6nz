class Solution {

    minCostConnectPoints(points) {

        const n = points.length;

        let heap = new MinHeap();

        let visited = new Set();

        heap.push([0, 0]);

        let result = 0;

        while (visited.size < n) {

            let [cost, node] = heap.pop();

            if (visited.has(node)) continue;

            visited.add(node);

            result += cost;

            for (let next = 0; next < n; next++) {

                if (!visited.has(next)) {

                    let distance =
                        Math.abs(points[node][0] - points[next][0]) +
                        Math.abs(points[node][1] - points[next][1]);

                    heap.push([distance, next]);
                }
            }
        }

        return result;
    }
}


// Helper class - Minheap
class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.heap.length - 1;

        while (idx > 0) {

            let parent = Math.floor((idx - 1) / 2);

            // compare cost
            if (this.heap[parent][0] <= this.heap[idx][0]) {
                break;
            }

            [this.heap[parent], this.heap[idx]] =
                [this.heap[idx], this.heap[parent]];

            idx = parent;
        }
    }

    pop() {

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        let min = this.heap[0];

        this.heap[0] = this.heap.pop();

        this.bubbleDown();

        return min;
    }

    bubbleDown() {

        let idx = 0;
        let length = this.heap.length;

        while (true) {

            let left = 2 * idx + 1;
            let right = 2 * idx + 2;

            let smallest = idx;

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

            if (smallest === idx) break;

            [this.heap[idx], this.heap[smallest]] =
                [this.heap[smallest], this.heap[idx]];

            idx = smallest;
        }
    }
}