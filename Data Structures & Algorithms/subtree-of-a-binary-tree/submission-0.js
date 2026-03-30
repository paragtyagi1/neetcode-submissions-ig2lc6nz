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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {

        const isSameTree = (a, b) => {
            if (!a && !b) return true;
            if (!a || !b) return false;
            if (a.val !== b.val) return false;

            return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
        };

        if (!root) return false;

        if (isSameTree(root, subRoot)) return true;

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }
}
