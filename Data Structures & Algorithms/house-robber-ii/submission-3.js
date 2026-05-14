class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) { 

        if(nums.length<=1) return nums[0];

        let robHouse = (houses)=>{
          let dp = [];
          dp[0] = houses[0];
          dp[1] = Math.max(houses[0],houses[1]);
        
          for(let i = 2;i<houses.length; i++){
                dp[i] = Math.max( houses[i] + dp[i-2], dp[i-1]);
          }

          return dp[houses.length-1];  
        }      

        let includeFirst = robHouse(nums.slice(0,nums.length-1));
        let excludeFirst = robHouse(nums.slice(1));

        return Math.max(includeFirst,excludeFirst);
    }
}