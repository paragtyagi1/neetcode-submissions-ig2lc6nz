class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        let start = Math.max(...nums);
        let end = nums.reduce((acc, curr) => acc + curr, 0);

        while (start <= end) {
            let mid = start + Math.floor((end - start) / 2);
            let splits = this.calculateSplits(mid, nums);

            if (splits <= k) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        return start;
    }

    calculateSplits(sum, nums) {
        let splits = 1;
        let currentSum = 0;
        for (let num of nums) {
            if (currentSum + num > sum) {
                splits++;
                currentSum = num;
            } else {
                currentSum += num;
            }
        }

        return splits;
    }
}
