class Solution {
    change(amount, coins) {
        const n = coins.length;

        const dp = Array.from({ length: n + 1 }, () => Array(amount + 1).fill(0));

        for (let i = 0; i <= n; i++) {
            dp[i][0] = 1;
        }

        for (let i = n - 1; i >= 0; i--) {
            for (let rem = 1; rem <= amount; rem++) {
                let take = 0;

                if (rem >= coins[i]) {
                    take = dp[i][rem - coins[i]];
                }

                let skip = dp[i + 1][rem];
                
                dp[i][rem] = take + skip;
            }
        }

        return dp[0][amount];
    }
}
