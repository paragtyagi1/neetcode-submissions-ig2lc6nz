class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums) {
        const n = nums.length;

        nums = [1, ...nums, 1];

        const dp = Array.from({ length: n + 2 }, () => Array(n + 2).fill(0));

        for (let i = n; i >= 1; i--) {
            for (let j = 1; j <= n; j++) {
                if (i > j) continue;

                let maxi = 0;

                for (let ind = i; ind <= j; ind++) {
                    const cost =
                        nums[i - 1] * nums[ind] * nums[j + 1] + dp[i][ind - 1] + dp[ind + 1][j];

                    maxi = Math.max(maxi, cost);
                }

                dp[i][j] = maxi;
            }
        }

        return dp[1][n];
    }
}
