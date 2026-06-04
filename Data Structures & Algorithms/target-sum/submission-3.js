class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        let memo = new Map();

        let solve = (totalSum, index) => {
            if (index === nums.length) {
                return totalSum === target ? 1 : 0;
            }

            let key = `${totalSum},${index}`;
            if (memo.has(key)) return memo.get(key);

            let addNext = solve(totalSum + nums[index], index + 1);

            let subtractNext = solve(totalSum - nums[index], index + 1);

            let ways = addNext + subtractNext;
            memo.set(key, ways);
            return ways;
        };

        return solve(0, 0);
    }
}
