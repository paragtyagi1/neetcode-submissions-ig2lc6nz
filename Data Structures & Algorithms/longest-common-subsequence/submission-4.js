class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const dp = Array.from({ length: text1.length + 1 }, () => Array(text2.length + 1).fill(-1));

        let solve = (i, j) => {
            if (i === text1.length || j === text2.length) return 0;

            if (dp[i][j] !== -1) return dp[i][j];

            let ans;

            if (text1[i] === text2[j]) {
                ans = 1 + solve(i + 1, j + 1);
            } else {
                ans = Math.max(solve(i, j + 1), solve(i + 1, j));
            }

            dp[i][j] = ans;
            return dp[i][j];
        };

        return solve(0, 0);
    }
}
