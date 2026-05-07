class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
    let ROWS = heights.length;
    let COLS = heights[0].length
    let result = [];
    let pacific = new Set();
    let atlantic = new Set();


    let dfs = (row, col, visited, prevHeight) => {
        let key = `${row},${col}`
        if (row < 0 || col < 0 || row >= ROWS || col >= COLS || visited.has(key) || heights[row][col] < prevHeight) return

        visited.add(key);

        let dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        for (let [dx, dy] of dirs) {
            let nextRow = row + dx;
            let nextCol = col + dy;

            dfs(nextRow, nextCol, visited, heights[row][col]);
        }

    }

    // Mark pacific and atlantic 
    for (let col = 0; col < COLS; col++) {
        dfs(0, col, pacific, heights[0][col]);
        dfs(ROWS - 1, col, atlantic, heights[ROWS - 1][col]);
    }
    
    for (let row = 0; row < ROWS; row++) {
        dfs(row, 0, pacific, heights[row][0]);
        dfs(row, COLS-1, atlantic, heights[row][COLS-1]);
    }


    // check for both visited vertices..
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            const key = `${r},${c}`;
            if (pacific.has(key) && atlantic.has(key)) {
                result.push([r, c]);
            }
        }
    }

    return result;

}
}
