class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
      
    if (nums.length <= 1) return nums;

    const mid = Math.floor(nums.length / 2);

    const left = this.sortArray(nums.slice(0, mid));
    const right = this.sortArray(nums.slice(mid));

    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
     result.push(left[i]<right[j]?left[i++]:right[j++])
    }

    return [...result,...left.slice(i),...right.slice(j)]
   }
}
