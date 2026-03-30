class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
    let result = [];

    let backtrack = (index) => {
        if (index === nums.length) {
            result.push([...nums]);
            return;
        }

        for (let i = index; i < nums.length; i++) {
            [nums[index], nums[i]] = [nums[i], nums[index]];

            backtrack(index + 1);

            [nums[index], nums[i]] = [nums[i], nums[index]];
        }
    }


    backtrack(0);
    return result;
}
}
