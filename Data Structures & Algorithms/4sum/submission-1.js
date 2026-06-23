class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        let result = [];
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 3; i++) {
            if (i > 0 && nums[i - 1] == nums[i]) continue;

            for (let j = i + 1; j < nums.length - 2; j++) {
                let left = j + 1;
                let right = nums.length - 1;

                if (j > i + 1 && nums[j] === nums[j - 1]) continue;

                while (left < right) {
                    let sum = nums[left] + nums[right] + nums[i] + nums[j];

                    if (sum === target) {
                        result.push([nums[i], nums[j], nums[left], nums[right]]);

                        while (left < nums.length && nums[left] == nums[left + 1]) left++;
                        while (right > 0 && nums[right] == nums[right - 1]) right--;

                        left++;
                        right--;
                    } else if (sum < target) {
                        left++;
                    } else {
                        right--;
                    }
                }
            }
        }

        return result;
    }
}
