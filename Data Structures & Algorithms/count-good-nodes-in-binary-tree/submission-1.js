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
    goodNodes(root) {

    if (!root) return 0;

    let dfs = (root, maxSoFar) => {
        if (!root) return 0;
        let count = 0;

        if (root.val >= maxSoFar) {
          count = 1
          maxSoFar = root.val;
        }

        let left = dfs(root.left, maxSoFar);
        let right = dfs(root.right, maxSoFar);

        return count + left + right;
    }

    return dfs(root, root.val);
}
}
