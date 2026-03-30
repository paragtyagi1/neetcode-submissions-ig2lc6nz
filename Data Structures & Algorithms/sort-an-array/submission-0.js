class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        let arr = nums;
        if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  const left = this.sortArray(arr.slice(0, mid));
  const right = this.sortArray(arr.slice(mid));

  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
    }
}
