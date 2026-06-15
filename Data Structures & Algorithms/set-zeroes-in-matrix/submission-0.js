class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const rowCount = matrix.length;
        const columnCount = matrix[0].length;

        let firstRowHasZero = false;
        let firstColumnHasZero = false;

        // Check first row
        for (let column = 0; column < columnCount; column++) {
            if (matrix[0][column] === 0) {
                firstRowHasZero = true;
            }
        }

        // Check first column
        for (let row = 0; row < rowCount; row++) {
            if (matrix[row][0] === 0) {
                firstColumnHasZero = true;
            }
        }

        // Mark rows and columns
        for (let row = 1; row < rowCount; row++) {
            for (let column = 1; column < columnCount; column++) {
                if (matrix[row][column] === 0) {
                    matrix[row][0] = 0;
                    matrix[0][column] = 0;
                }
            }
        }

        // Zero rows
        for (let row = 1; row < rowCount; row++) {
            if (matrix[row][0] === 0) {
                for (let column = 1; column < columnCount; column++) {
                    matrix[row][column] = 0;
                }
            }
        }

        // Zero columns
        for (let column = 1; column < columnCount; column++) {
            if (matrix[0][column] === 0) {
                for (let row = 1; row < rowCount; row++) {
                    matrix[row][column] = 0;
                }
            }
        }

        // First row
        if (firstRowHasZero) {
            for (let column = 0; column < columnCount; column++) {
                matrix[0][column] = 0;
            }
        }

        // First column
        if (firstColumnHasZero) {
            for (let row = 0; row < rowCount; row++) {
                matrix[row][0] = 0;
            }
        }
    }
}
