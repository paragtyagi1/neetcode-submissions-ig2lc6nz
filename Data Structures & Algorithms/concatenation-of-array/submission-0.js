class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let result = [];
        for(let i=0;i <2*nums.length;i++){
          let index = i%nums.length;
          result.push(nums[index]);
        }

        return result
    }
}
