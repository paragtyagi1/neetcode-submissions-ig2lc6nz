class Solution {
    searchInsert(nums, target) {
        const n = nums.length;

        let start = 0;
        let end = n - 1;

        while (start < end) {
            const mid = Math.floor((start + end) / 2);

            if (nums[mid] >= target) {
                end = mid;
            } else {
                start = mid + 1;
            }
        }

        if (nums[start] < target) {
            return start + 1;
        }

        return start;
    }
}