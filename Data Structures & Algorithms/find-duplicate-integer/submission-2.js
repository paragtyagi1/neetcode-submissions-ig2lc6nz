class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let set = new Set();
        for(let x of nums){
          if(set.has(x)){
            return x;
          }
          set.add(x);
        }
    }
}
