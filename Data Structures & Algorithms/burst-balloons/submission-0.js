class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums) {
        nums = [1, ...nums, 1];

        const memo = new Map();

        function dfs(left, right) {
            if (left + 1 === right) {
                return 0;
            }

            const key = `${left},${right}`;

            if (memo.has(key)) {
                return memo.get(key);
            }

            let maxCoins = 0;

            for (let index = left + 1; index < right; index++) {
                maxCoins = Math.max(
                    maxCoins,
                    nums[left] * nums[index] * nums[right] + dfs(left, index) + dfs(index, right),
                );
            }

            memo.set(key, maxCoins);
            return maxCoins;
        }

        return dfs(0, nums.length - 1);
    }
}
