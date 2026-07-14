class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
    let start=0;
    let end = nums.length-1;

    while(start<end){
       let mid = start+Math.floor((end-start)/2);

       if(nums[mid]>nums[end]){
         start=mid+1;
       }else{
        end = mid;
       }
    }

    return nums[end];
    }
}
