class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    // coinChange(coins, amount) {

    //     let memo = new Map();

    //     const dfs = (remaining) => {

    //         // Exact amount formed
    //         if (remaining === 0) return 0;

    //         // Invalid path
    //         if (remaining < 0) return Infinity;

    //         // Memoized
    //         if (memo.has(remaining)) {
    //             return memo.get(remaining);
    //         }

    //         let minCoins = Infinity;

    //         for (let coin of coins) {

    //             let result = dfs(remaining - coin);

    //             minCoins = Math.min(
    //                 minCoins,
    //                 1 + result
    //             );
    //         }

    //         memo.set(remaining, minCoins);

    //         return minCoins;
    //     };

    //     let ans = dfs(amount);

    //     return ans === Infinity ? -1 : ans;
    // }

    coinChange(coins, amount) {

        let dp = new Array(amount + 1).fill(Infinity);

        // base case
        dp[0] = 0;

        for (let currAmount = 1; currAmount <= amount; currAmount++) {

            for (let coin of coins) {

                if (currAmount - coin >= 0) {

                    dp[currAmount] = Math.min(
                        dp[currAmount],
                        1 + dp[currAmount - coin]
                    );
                }
            }
        }

        return dp[amount] === Infinity
            ? -1
            : dp[amount];
    }
}