class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let candidate =nums[0] ; let count=1;

        for(let i=1; i<nums.length; i++){
                if(nums[i] == candidate){
                    count++
                }
                else{
                    count--;
                }

                if(count==0){
                    candidate = nums[i];
                    count=1;
                }
        }

        return candidate;
    }
}
