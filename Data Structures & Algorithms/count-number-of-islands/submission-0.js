class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
    if(!grid.length) return 0;

    let rows = grid.length;
    let cols = grid[0].length;

    let dfs  = (row,col)=>{
        if(row < 0 || col < 0 || row >= rows || col>=cols || grid[row][col] == 0){
            return;
        }

        grid[row][col] = "0" // mark as visited

        dfs(row+1, col);
        dfs(row-1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);   
    }

    let count = 0;

    for(let row=0; row<rows; row++){
        for(let col=0; col<cols; col++){
              if(grid[row][col] == "1"){
                  count++;
                  dfs(row,col);
              }
        }
    }

    return count;

    }
}
