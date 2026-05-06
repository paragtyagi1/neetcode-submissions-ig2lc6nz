class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let ROTTEN = 2;
        let FRESH = 1;

        let rows = grid.length;
        let cols = grid[0].length;
        let queue = [];
        let freshCount = 0;

        // Add all rotten fruits
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (grid[row][col] === ROTTEN){
                    queue.push([row, col]);
                }
                if (grid[row][col] === FRESH) {
                    freshCount++;
                }
            }
        }

        let dirs = [[1,0],[-1,0],[0,1],[0,-1]];
        let time = 0;

        // BFS
         // Step 2: BFS (level by level)
        while (queue.length > 0 && freshCount > 0) {
            let size = queue.length;

            for (let i = 0; i < size; i++) {
                let [currentRow, currentCol] = queue.shift();

                for (let [dx, dy] of dirs) {
                    let nextRow = currentRow + dx;
                    let nextCol = currentCol + dy;

                    if (
                        nextRow >= 0 && nextCol >= 0 &&
                        nextRow < rows && nextCol < cols &&
                        grid[nextRow][nextCol] === FRESH
                    ) {
                        grid[nextRow][nextCol] = ROTTEN;
                        queue.push([nextRow, nextCol]);
                        freshCount--;
                    }
                }
            }

            time++;
        }

        return freshCount === 0 ? time : -1;
    }
}
