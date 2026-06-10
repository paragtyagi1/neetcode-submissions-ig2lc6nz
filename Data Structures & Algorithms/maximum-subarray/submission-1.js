class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        // [2,-3,4,-2,2,1,-1,4]
        let currentMax = nums[0];
        let max = nums[0];

        if(nums.length == 1){
            return nums[0];
        }

        for(let i =1; i<nums.length; i++){
          currentMax = Math.max(nums[i],(currentMax+nums[i]));
          max = Math.max(max,currentMax);
        }
        return max;
        
    }
}
