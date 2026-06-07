class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    isMatch(s, p) {
        let dp = Array.from({ length: s.length + 1 }, () => new Array(p.length + 1).fill(-1));

        function solve(i, j) {
            if (j === p.length) {
                return i === s.length;
            }
            if (dp[i][j] !== -1) {
                return dp[i][j];
            }

            const match = i < s.length && (s[i] === p[j] || p[j] === ".");

            if (j + 1 < p.length && p[j + 1] === "*") {
                return solve(i, j + 2) || (match && solve(i + 1, j));
            }

            dp[i][j] = match && solve(i + 1, j + 1);

            return dp[i][j];
        }

        return solve(0, 0);
    }
}
