class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums) {
        const n = nums.length;

        nums = [1, ...nums, 1];

        const dp = Array.from({ length: n + 2 }, () => Array(n + 2).fill(0));

        for (let left = n; left >= 1; left--) {
            for (let right = 1; right <= n; right++) {
                if (left > right) continue;

                let maxCoins = 0;

                for (let ind = left; ind <= right; ind++) {
                    const cost =
                        nums[left - 1] * nums[ind] * nums[right + 1] + dp[left][ind - 1] + dp[ind + 1][right];

                    maxCoins = Math.max(maxCoins, cost);
                }

                dp[left][right] = maxCoins;
            }
        }

        return dp[1][n];
    }
}
