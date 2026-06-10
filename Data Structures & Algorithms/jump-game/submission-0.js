class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let farthest = 0;

        for (let i = 0; i < nums.length; i++) {
            // Can't even reach this index
            if (i > farthest) {
                return false;
            }

            // Update farthest reachable position
            farthest = Math.max(farthest, i + nums[i]);
        }

        return true;
    }
}
