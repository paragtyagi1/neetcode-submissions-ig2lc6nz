class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

    let n = nums.length;

    if (n === 1) return nums[0];

    let dp = new Array(n).fill(0);

    dp[0] = nums[0];

    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < n; i++) {

        let include = nums[i] + dp[i - 2];

        let exclude = dp[i - 1];

        dp[i] = Math.max(include, exclude);
    }

    return dp[n - 1];
}
}
