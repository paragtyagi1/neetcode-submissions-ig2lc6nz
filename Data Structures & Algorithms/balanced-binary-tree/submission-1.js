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
     * @return {boolean}
     */
    isBalanced(root) {
      let dfs = (root) => {
          if(!root) return 0;
          
          let leftHeight = dfs(root.left);
          if(leftHeight == -1) return -1;

          let rightHeight = dfs(root.right);
          if(rightHeight == -1) return -1;

          if(Math.abs(leftHeight-rightHeight)>1) return -1;

          return 1+ Math.max(leftHeight,rightHeight);
      }
      return dfs(root)!== -1;
    }
}
