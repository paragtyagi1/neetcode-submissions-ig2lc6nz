class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let n = nums.length;

        let i = 0;

        while (i < n) {
            let correctIndex = nums[i] - 1;
            if (nums[i] > 0 && nums[i] !== nums[correctIndex] && nums[i] <= n) {
              [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
            } else {
                i++;
            }
        }

        for (let j = 0; j < nums.length; j++) {
            if (nums[j] !== j + 1) {
                return j + 1;
            }
        }

        return nums.length + 1;
    }
}
