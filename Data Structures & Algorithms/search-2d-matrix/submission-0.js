class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let start = 0;
        let rows = matrix.length;
        let cols = matrix[0].length
        let end = (rows*cols)-1;

        while(start<=end){
          let mid = Math.floor((start+end)/2);

          let row = Math.floor(mid/cols);
          let col = mid%cols;

          let value = matrix[row][col];

          if(value === target) return true;

          if(value< target){
            start  = mid +1;
          }
          else{
            end = mid - 1;
          }

        }

        return false
    }
}
