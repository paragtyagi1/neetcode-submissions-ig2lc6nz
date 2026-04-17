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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let result= [];
        let dfs = (root) =>{
          if(!root) {
            result.push("#");
            return
          }

          result.push(root.val);
          dfs(root.left);
          dfs(root.right);
        }

        dfs(root);
        return result.join(',');
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let input = data.split(',');
        let i=0;

        let dfs=()=>{
         if (input[i] === "#") {
                i++;
                return null;
         }

         let root = new TreeNode(input[i++]);

         root.left = dfs();
         root.right = dfs();

         return root;
        }

       return dfs();
    }
}
