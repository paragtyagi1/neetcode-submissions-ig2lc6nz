class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let preFixProduct = [];
        let suffixProduct = [];
        let result = [];
        let product1 = 1;
        let product2= 1;
        
        preFixProduct.push(nums[0]);
        suffixProduct.push(nums[nums.length-1]);

        for(let i = 0;i<nums.length;i++){
           product1 = nums[i]*product1;
           preFixProduct[i] = product1;
        }

        for(let j= nums.length-1;j>0;j--){
          product2 = nums[j]*product2;
          suffixProduct[j]= product2;
        }
      
        for(let x =0 ;x<nums.length;x++){
          let prefixProductValue = x === 0 ? 1: preFixProduct[x-1];
          let sufficProductValue = x === nums.length-1 ? 1:suffixProduct[x+1];

          let productValue = prefixProductValue*sufficProductValue;
          result.push(productValue);

        }

    return result;
    }
}
