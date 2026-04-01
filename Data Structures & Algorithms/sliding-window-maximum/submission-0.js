class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
       
       let result = [];
       let dq = [];
       let left = 0
       let right = 0;

       while(right<nums.length){

        while(dq.length && nums[dq[dq.length-1]] < nums[right]){
            dq.pop();
        }

        dq.push(right);

        // handle when window has from left.. 
        if(left>dq[0]){
           dq.shift();
        }

        // handle when window slided from right..
        if(right >= k-1){
          result.push(nums[dq[0]]);
          left++;
        }
        right++;
       }
       return result;
    }
}
