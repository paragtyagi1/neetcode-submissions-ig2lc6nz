class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = [];
        let buckets = [[]];
        let result = [];

        for(let num of nums){
            freq[num] = (freq[num] || 0)+1;
            buckets.push([]);
        }

        for (let num in freq) {
          buckets[freq[num]].push(Number(num)); // push the value at freq index of bucket 
        }

        for(let i=buckets.length-1;i>=0;i--){
           for(let nums of buckets[i]){
              result.push(nums);
              if(result.length === k) return result;
           }
        }
    }
}
