class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
       
       let result = [];
       let deque = [];
       let left = 0
       let right = 0;

       while(right<nums.length){

        while(deque.length && nums[deque[deque.length-1]] < nums[right]){
            deque.pop();
        }

        deque.push(right);

        // handle when window has from left.. 
        if(left>deque[0]){
           deque.shift();
        }

        // handle when window slided from right..
        if(right >= k-1){
          result.push(nums[deque[0]]);
          left++;
        }

        right++;
       }
       return result;
    }
}
