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
     * @param {number} target
     * @return {TreeNode}
     */
    removeLeafNodes(root, target) {
        if (!root) return null;

        // First remove leaves from the subtrees
        root.left = this.removeLeafNodes(root.left, target);
        root.right = this.removeLeafNodes(root.right, target);

        // Now check if current node has become a leaf
        if (root.left === null && root.right === null && root.val === target) {
            return null;
        }

        return root;
    }
}
