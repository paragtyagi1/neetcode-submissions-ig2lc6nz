class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        const rows = word1.length + 1;
        const cols = word2.length + 1;

        const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

        for (let j = 0; j < cols; j++) {
            dp[word1.length][j] = word2.length - j;
        }

        for (let i = 0; i < rows; i++) {
            dp[i][word2.length] = word1.length - i;
        }

        for (let i = word1.length - 1; i >= 0; i--) {
            for (let j = word2.length - 1; j >= 0; j--) {
                if (word1[i] === word2[j]) {
                    dp[i][j] = dp[i + 1][j + 1];
                } else {
                    dp[i][j] =
                        1 +
                        Math.min(
                            dp[i][j + 1], // insert
                            dp[i + 1][j], // delete
                            dp[i + 1][j + 1], // replace
                        );
                }
            }
        }

        return dp[0][0];
    }
}
