class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let currentBuy = prices[0];

        for (let i = 1; i < prices.length; i++) {
            if (prices[i] <= currentBuy) {
                currentBuy = prices[i];
                continue;
            } else {
                profit += prices[i] - currentBuy;
                currentBuy = prices[i];
            }
        }

        return profit;
    }
}
