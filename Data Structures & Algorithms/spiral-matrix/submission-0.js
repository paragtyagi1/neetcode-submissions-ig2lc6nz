class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        const spiralElements = [];

        let topRow = 0;
        let bottomRow = matrix.length - 1;

        let leftColumn = 0;
        let rightColumn = matrix[0].length - 1;

        while (topRow <= bottomRow && leftColumn <= rightColumn) {
            // Traverse top row
            for (let column = leftColumn; column <= rightColumn; column++) {
                spiralElements.push(matrix[topRow][column]);
            }
            topRow++;

            // Traverse right column
            for (let row = topRow; row <= bottomRow; row++) {
                spiralElements.push(matrix[row][rightColumn]);
            }
            rightColumn--;

            // Traverse bottom row
            if (topRow <= bottomRow) {
                for (let column = rightColumn; column >= leftColumn; column--) {
                    spiralElements.push(matrix[bottomRow][column]);
                }
                bottomRow--;
            }

            // Traverse left column
            if (leftColumn <= rightColumn) {
                for (let row = bottomRow; row >= topRow; row--) {
                    spiralElements.push(matrix[row][leftColumn]);
                }
                leftColumn++;
            }
        }

        return spiralElements;
    }
}
