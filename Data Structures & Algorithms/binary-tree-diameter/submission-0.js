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
    diameterOfBinaryTree(root) {
        let diameter = 0;

        const dfs = (root)=>{
           if(!root) return 0;

           let left = dfs(root.left);
           let right = dfs(root.right);

           diameter = Math.max(diameter,left+right);

           return 1 + Math.max(left,right);
        }
        dfs(root);

        return diameter;
    }
}
