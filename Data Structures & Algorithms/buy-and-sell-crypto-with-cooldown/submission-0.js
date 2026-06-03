class Solution {
    maxProfit(prices) {
        const memo = new Map();

        function dfs(i, buying) {
            if (i >= prices.length) {
                return 0;
            }

            const key = `${i},${buying}`;

            if (memo.has(key)) {
                return memo.get(key);
            }

            let profit;

            if (buying) {
                const buy = -prices[i] + dfs(i + 1, false);
                const skip = dfs(i + 1, true);
                profit = Math.max(buy, skip);
            } else {
                const sell = prices[i] + dfs(i + 2, true);
                const hold = dfs(i + 1, false);
                profit = Math.max(sell, hold);
            }

            memo.set(key, profit);
            return profit;
        }

        return dfs(0, true);
    }
}
