class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

    let maxLength=0;
    let maxFreq=0;
    let map = new Map();
    let left = 0;

    for(let right=0;right<s.length;right++) {
        map.set( s[right],(map.get( s[right])||0)+1);
        maxFreq = Math.max(map.get(s[right]),maxFreq);
        
        while((right-left+1)-maxFreq>k){
             map.set(s[left],map.get(s[left])-1);
             left++;
        }

        maxLength=Math.max(maxLength,right-left+1);
    }
    return maxLength;
    }
}
