class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    isMatch(s, p) {
        const m = s.length;
        const n = p.length;

        const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

        dp[m][n] = true;

        for (let i = m; i >= 0; i--) {
            for (let j = n - 1; j >= 0; j--) {
                const match = i < m && (s[i] === p[j] || p[j] === ".");

                if (j + 1 < n && p[j + 1] === "*") {
                    dp[i][j] = dp[i][j + 2] || (match && dp[i + 1][j]);
                } else {
                    dp[i][j] = match && dp[i + 1][j + 1];
                }
            }
        }

        return dp[0][0];
    }
}
