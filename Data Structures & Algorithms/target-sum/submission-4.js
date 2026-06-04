class Solution {
    findTargetSumWays(nums, target) {
        const n = nums.length;

        const S = nums.reduce((a, b) => a + b, 0);

        const offset = S;

        const dp = Array.from({ length: n + 1 }, () => Array(2 * S + 1).fill(0));

        if (target >= -S && target <= S) {
            dp[n][target + offset] = 1;
        }

        for (let i = n - 1; i >= 0; i--) {
            for (let total = -S; total <= S; total++) {
                let ways = 0;

                const plus = total + nums[i];
                const minus = total - nums[i];

                if (plus >= -S && plus <= S) {
                    ways += dp[i + 1][plus + offset];
                }

                if (minus >= -S && minus <= S) {
                    ways += dp[i + 1][minus + offset];
                }

                dp[i][total + offset] = ways;
            }
        }

        return dp[0][offset];
    }
}
