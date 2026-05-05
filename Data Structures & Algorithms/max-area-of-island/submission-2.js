class Solution {
  /**
   * @param {number[][]} grid
   * @return {number}
   */
  maxAreaOfIsland(grid) {
    if (!grid.length) return 0;

    let rows = grid.length;
    let cols = grid[0].length;
    let maxArea = 0;

    const dfs = (row, col) => {
      // base case
      if (
        row < 0 || col < 0 ||
        row >= rows || col >= cols ||
        grid[row][col] === 0
      ) {
        return 0;
      }

      // mark visited
      grid[row][col] = 0;

      // count current cell + neighbors
      let area = 1;

      area += dfs(row + 1, col) + dfs(row - 1, col) + dfs(row, col + 1)+ dfs(row, col - 1);
      

      return area;
    };

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (grid[row][col] === 1) {
          let area = dfs(row, col);
          maxArea = Math.max(maxArea, area);
        }
      }
    }

    return maxArea;
  }
}