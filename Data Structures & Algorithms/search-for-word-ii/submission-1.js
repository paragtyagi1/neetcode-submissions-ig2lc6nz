class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
    const root = new TrieNode();

    // Step 1: Build Trie
    for (let word of words) {
        let node = root;
        for (let ch of word) {
            if (!node.children[ch]) {
                node.children[ch] = new TrieNode();
            }
            node = node.children[ch];
        }
        node.word = word;
    }

    const result = [];

    const dfs = (i, j, node) => {
        const ch = board[i][j];

        if (!node.children[ch]) return;

        node = node.children[ch];

        // found word
        if (node.word) {
            result.push(node.word);
            node.word = null; // avoid duplicates
        }

        board[i][j] = '#'; // mark visited

        const dirs = [[1,0], [-1,0], [0,1], [0,-1]];

        for (let [dx, dy] of dirs) {
            let x = i + dx;
            let y = j + dy;

            if (
                x >= 0 && y >= 0 &&
                x < board.length &&
                y < board[0].length &&
                board[x][y] !== '#'
            ) {
                dfs(x, y, node);
            }
        }

        board[i][j] = ch; // backtrack
    };

    // Step 2: Start DFS from every cell
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            dfs(i, j, root);
        }
    }

    return result;
}
}
class TrieNode {
    constructor() {
        this.children = {};
        this.word = null; // store complete word
    }
}

