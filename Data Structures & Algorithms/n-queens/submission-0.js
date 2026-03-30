class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        let result = [];
        let board = Array.from({length:n},()=>Array(n).fill("."));

        function isSafe(row,col){
          //check col 
          for(let i=0; i<row; i++){
            if(board[i][col] === "Q") return false
          }

          //check left diagonal
          for(let i = row-1, j = col-1; i >= 0 && j >= 0; i--, j--){
            if(board[i][j] === "Q") return false
          }

          //check right diagonal
          for(let i = row-1, j = col+1; i >= 0 & j < n; i--, j++){
            if(board[i][j] === "Q") return false
          }

          return true;

        }

        let placeQueens = (row)=>{
            if(row == n){
                result.push(board.map((r)=>r.join("")));
                return;
            }

            for(let col=0 ; col < n; col++){
                 if(isSafe(row,col)){
                       board[row][col] = "Q";
                       placeQueens(row+1);
                       board[row][col] = ".";
                 }
            }
        }

        placeQueens(0);
        return result;

    }
}
