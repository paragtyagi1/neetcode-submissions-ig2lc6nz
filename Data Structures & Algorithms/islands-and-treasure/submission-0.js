class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let LAND = 2147483647;
        let TRESURE = 0;

        let rows = grid.length;
        let cols = grid[0].length;
        let queue = []

         for(let row=0;row<rows ; row++){
            for(let col = 0; col<cols; col ++){
                if(grid[row][col] === TRESURE){
                   queue.push([row,col]);
                }
            }
        }

        let dirs = [[1,0],[-1,0],[0,1],[0,-1]];

        // bfs
        while(queue.length > 0){
            let [currentRow,currentCol] = queue.shift();

            for(let [dx,dy] of dirs){
                let nextRow = currentRow + dx;
                let nextCol = currentCol + dy;

                // check bounds and validity
                if(nextRow>=0 &&  nextCol>=0 &&  nextRow < rows && nextCol < cols && grid[nextRow][nextCol] === LAND ){
                   grid[nextRow][nextCol] = grid[currentRow][currentCol] + 1;
                   queue.push([nextRow,nextCol]);
                }
            }
        }

        return grid;
    }
}
