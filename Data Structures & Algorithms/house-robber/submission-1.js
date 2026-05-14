class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

    // tabulation

    let n = nums.length;

    if (n === 1) return nums[0];

    // let dp = new Array(n).fill(0);

    //dp[0] = nums[0];
    let one = nums[0]

    //dp[1] = Math.max(nums[0], nums[1]);
    let two =  Math.max(nums[0], nums[1]);
    for (let i = 2; i < n; i++) {

        let include = nums[i] + one;
        let exclude = two;

        let temp = Math.max(include, exclude);
        one = two;
        two = temp;
    }

    return two;
}
}
