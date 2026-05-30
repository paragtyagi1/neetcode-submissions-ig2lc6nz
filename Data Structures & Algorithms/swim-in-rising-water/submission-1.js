class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {

        let n = grid.length;

        let visited = new Set();

        // [time, row, col]
        let minHeap = new MinPriorityQueue((x) => x[0]);

        minHeap.enqueue([grid[0][0], 0, 0]);

        let directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];

        while (!minHeap.isEmpty()) {

            let [time, row, col] = minHeap.dequeue();

            let key = `${row},${col}`;

            if (visited.has(key)) {
                continue;
            }

            visited.add(key);

            // reached destination
            if (row === n - 1 && col === n - 1) {
                return time;
            }

            for (let [dr, dc] of directions) {

                let newRow = row + dr;
                let newCol = col + dc;

                if (
                    newRow < 0 ||
                    newCol < 0 ||
                    newRow >= n ||
                    newCol >= n
                ) {
                    continue;
                }

                let newKey = `${newRow},${newCol}`;

                if (visited.has(newKey)) {
                    continue;
                }

                let newTime = Math.max(
                    time,
                    grid[newRow][newCol]
                );

                minHeap.enqueue([
                    newTime,
                    newRow,
                    newCol
                ]);
            }
        }
    }
}