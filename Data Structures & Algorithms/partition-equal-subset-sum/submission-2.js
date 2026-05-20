// Tabulation

// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {boolean}
//      */
//     canPartition(nums) {
//         let sum = nums.reduce((a, b) => a + b, 0);
//         if (sum % 2 !== 0) {
//             return false;
//         }
//         const target = sum / 2;
//         const n = nums.length;

//         const dp = Array.from(Array(n + 1), () => Array(target + 1).fill(false));

//         for (let i = 0; i <= n; i++) {
//             dp[i][0] = true;
//         }

//         for (let i = 1; i <= n; i++) {
//             for (let sum = 1; sum <= target; sum++) {
//                 if (nums[i - 1] <= sum) {
//                     dp[i][sum] = dp[i - 1][sum] || dp[i - 1][sum - nums[i - 1]];
//                 } else {
//                     dp[i][sum] = dp[i - 1][sum];
//                 }
//             }
//         }

//         return dp[n][target];
//     }
// }

// Space optimized..

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        if (nums.reduce((a, b) => a + b, 0) % 2) {
            return false;
        }

        const target = nums.reduce((a, b) => a + b, 0) / 2;
        let dp = Array(target + 1).fill(false);
        let nextDp = Array(target + 1).fill(false);

        dp[0] = true;
        for (let i = 0; i < nums.length; i++) {
            for (let j = 1; j <= target; j++) {
                if (j >= nums[i]) {
                    nextDp[j] = dp[j] || dp[j - nums[i]];
                } else {
                    nextDp[j] = dp[j];
                }
            }
            [dp, nextDp] = [nextDp, dp];
        }

        return dp[target];
    }
}
