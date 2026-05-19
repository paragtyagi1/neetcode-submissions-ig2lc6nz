class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {

        let memo = new Map();

        const dfs = (remaining) => {

            // Exact amount formed
            if (remaining === 0) return 0;

            // Invalid path
            if (remaining < 0) return Infinity;

            // Memoized
            if (memo.has(remaining)) {
                return memo.get(remaining);
            }

            let minCoins = Infinity;

            for (let coin of coins) {

                let result = dfs(remaining - coin);

                minCoins = Math.min(
                    minCoins,
                    1 + result
                );
            }

            memo.set(remaining, minCoins);

            return minCoins;
        };

        let ans = dfs(amount);

        return ans === Infinity ? -1 : ans;
    }
}