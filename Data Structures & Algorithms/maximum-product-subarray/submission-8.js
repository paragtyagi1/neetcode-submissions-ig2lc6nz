class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let currentMax = nums[0];
        let currentMin = nums[0];
        let result = nums[0];

        if (nums.length === 1) return nums[0];

        for (let i = 1; i < nums.length; i++) {
            let tempMax = Math.max(nums[i], nums[i] * currentMax, nums[i] * currentMin);
            let tempMin = Math.min(nums[i], nums[i] * currentMax, nums[i] * currentMin);

            currentMax = tempMax;
            currentMin = tempMin;

            result = Math.max(result, currentMax);
        }

        return result;
    }
}
