class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        const n = matrix.length;

        // transpose
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            }
        }

        // reverse each row
        for (let row of matrix) {
            row.reverse();
        }
    }
}
