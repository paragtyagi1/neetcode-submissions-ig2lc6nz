class TrieNode {
    constructor() {
        this.children = {};
        this.word = null;
    }
}
class Solution{

findWords(board, words) {
    const root = new TrieNode();

    // Build Trie
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

    let rows = board.length;
    let cols = board[0].length;
    let result = [];


    let dfs = (row, col, node) => {

        // boundary + visited check
        if (
            row < 0 || col < 0 ||
            row >= rows || col >= cols ||
            board[row][col] === '#'
        ) return;

        let ch = board[row][col];

        // no matching trie path
        if (!node.children[ch]) return;

        // move forward in trie
        node = node.children[ch];

        // found word
        if (node.word) {
            result.push(node.word);
            node.word = null; // avoid duplicates
        }

        // mark visited (same as before)
        board[row][col] = '#';

        // explore 4 directions
        dfs(row + 1, col, node);
        dfs(row - 1, col, node);
        dfs(row, col + 1, node);
        dfs(row, col - 1, node);

        // backtrack
        board[row][col] = ch;
    };

    // same outer loop as Word Search I
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            dfs(row, col, root);
        }
    }

    return result;
}
}