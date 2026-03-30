class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
    let rows = board.length;
    let cols = board[0].length;

    let dfs = (index, row, col) => {
        if (index === word.length) {
            return true;
        }

        if (row < 0 ||
            col < 0 ||
            row >= rows ||
            col >= cols ||
            board[row][col] !== word[index]) {
            return false;
        }

        let temp = board[row][col];
        board[row][col] = "#";

        let found = dfs(index + 1, row + 1, col) ||
            dfs(index + 1, row - 1, col) ||
            dfs(index + 1, row, col + 1) ||
            dfs(index + 1, row, col - 1);

        board[row][col] = temp;

        return found;
    }

    for (let row = 0; row<rows; row++) {
        for (let col = 0; col < cols; col++) {
            if(dfs(0, row, col)) return true;
        }
    }

    return false;
}
}
