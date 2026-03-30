class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    myMap = new Map();
    encodedStr =``;
    encode(strs) {

     for(let x = 0;x<strs.length;x++){
        this.encodedStr = this.encodedStr+strs[x];
     }
    
     this.myMap.set(this.encodedStr,strs)
     return this.encodedStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
      return this.myMap.get(str)
    }
}
