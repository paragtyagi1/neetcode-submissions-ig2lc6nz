class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const n = prices.length;
        const dp = Array.from({ length: n + 2 }, () => new Array(2).fill(0));

        for (let i = n - 1; i >= 0; i--) {
            dp[i][1] = Math.max(dp[i + 1][0] - prices[i], dp[i + 1][1]);
            dp[i][0] = Math.max(dp[i + 2][1] + prices[i], dp[i + 1][0]);
        }

        return dp[0][1];
    }
}
