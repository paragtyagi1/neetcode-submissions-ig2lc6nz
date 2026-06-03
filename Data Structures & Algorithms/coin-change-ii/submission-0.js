class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        let memo = new Map();

        let solve = (i, remaining) => {
            if (i === coins.length) return 0;
            if (remaining < 0) return 0;
            if (remaining === 0) return 1;

            let key = `${i},${remaining}`;
            if (memo.has(key)) return memo.get(key);

            let take = solve(i, remaining - coins[i]);
            let notTake = solve(i + 1, remaining);

            memo.set(key, take + notTake);

            return take + notTake;
        };

        return solve(0, amount);
    }
}
