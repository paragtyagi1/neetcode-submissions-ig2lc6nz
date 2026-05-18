class Solution {

    canPartition(nums) {

        let total = nums.reduce((a, b) => a + b, 0);

        // odd total cannot be equally partitioned
        if (total % 2 !== 0) {
            return false;
        }

        let target = total / 2;

        let memo = new Map();

        function dfs(i, remaining) {

            let key = `${i},${remaining}`;

            // already computed
            if (memo.has(key)) {
                return memo.get(key);
            }

            // success
            if (remaining === 0) {
                return true;
            }

            // failure
            if (i >= nums.length || remaining < 0) {
                return false;
            }

            // take current number
            let take = dfs(i + 1, remaining - nums[i]);

            // skip current number
            let skip = dfs(i + 1, remaining);

            let result = take || skip;

            memo.set(key, result);

            return result;
        }

        return dfs(0, target);
    }
}