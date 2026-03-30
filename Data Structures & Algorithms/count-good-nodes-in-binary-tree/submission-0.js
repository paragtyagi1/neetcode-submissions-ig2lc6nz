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
        if(!root) return 0;
        let dfs = (root,maxValueSoFar)=>{
            if(!root) return 0;
            let count = 0

            if(root.val>=maxValueSoFar){
                count = 1;
                maxValueSoFar = root.val
            }

            let left = dfs(root.left,maxValueSoFar);
            let right = dfs(root.right,maxValueSoFar);

            return count + left + right;
        }
        return dfs(root,root.val)
    }
}
