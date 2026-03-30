class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    lengthOfLongestSubstringKDistinct(s, k) {

        let maxLength= 0;
        let currentLength= 0;
        let left = 0;
        let right=0;

        let map = new Map(); 

        while(right<s.length){
           map.set(s[right],(map.get(s[right])||0)+1);

           console.log(map);

           if(map.size <= k){
            currentLength= right-left+1;
            maxLength = Math.max(currentLength,maxLength);
            }

           if(map.size>k){
             map.set(s[left],map.get(s[left])-1)
             if(map.get(s[left])==0){
                map.delete(s[left]);
             }
             left++;
           }
          right++;
        }

        return maxLength;

    }
}
