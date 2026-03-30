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
    maxPathSum(root) {
        let maxSum = -Infinity;

        let dfs = (root)=>{
          if(!root) return 0;

          let leftSum = Math.max(0,dfs(root.left));
          let rightSum = Math.max(0,dfs(root.right));
        
          let currentSum = root.val + leftSum +rightSum;
          maxSum = Math.max(maxSum,currentSum);

          return root.val + Math.max(leftSum,rightSum);
        }
        dfs(root);
        return maxSum; 
    }
}
