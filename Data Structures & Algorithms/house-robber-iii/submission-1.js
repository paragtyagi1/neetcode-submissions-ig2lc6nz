/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    rob(root) {
        let dfs = (root) => {
            if (root === null) return [0, 0];

            let [leftRob, leftSkip] = dfs(root.left);
            let [rightRob, rightSkip] = dfs(root.right);

            let robRoot = root.val + leftSkip + rightSkip;

            let skipRoot = Math.max(leftRob, leftSkip) + Math.max(rightRob, rightSkip);

            return [robRoot, skipRoot];
        };

        let result = dfs(root);

        return Math.max(result[0],result[1]);
    }
}
