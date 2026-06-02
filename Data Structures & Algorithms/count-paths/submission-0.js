class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const memo = new Map();

        function dfs(r, c) {
            const key = `${r},${c}`;

            if (memo.has(key)) {
                return memo.get(key);
            }

            if (r === m - 1 && c === n - 1) {
                return 1;
            }

            if (r >= m || c >= n) {
                return 0;
            }

            const paths = dfs(r + 1, c) + dfs(r, c + 1);

            memo.set(key, paths);

            return paths;
        }

        return dfs(0, 0);
    }
}
