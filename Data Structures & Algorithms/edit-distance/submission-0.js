class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        const memo = new Map();

        function dfs(i, j) {
            const key = `${i},${j}`;

            if (memo.has(key)) {
                return memo.get(key);
            }

            if (i === word1.length) {
                return word2.length - j;
            }

            if (j === word2.length) {
                return word1.length - i;
            }

            let result;

            if (word1[i] === word2[j]) {
                result = dfs(i + 1, j + 1);
            } else {
                const insert = 1 + dfs(i, j + 1);
                const del = 1 + dfs(i + 1, j);
                const replace = 1 + dfs(i + 1, j + 1);

                result = Math.min(insert, del, replace);
            }

            memo.set(key, result);

            return result;
        }

        return dfs(0, 0);
    }
}
