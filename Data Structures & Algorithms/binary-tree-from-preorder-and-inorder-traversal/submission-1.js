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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
    let map = new Map();
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }

    let preIndex = 0;

    let dfs = (left, right) => {
        if (left > right) return null;

        const rootValue = preorder[preIndex++];
        const root = new TreeNode(rootValue);

        const mid = map.get(rootValue);

        root.left = dfs(left, mid - 1);
        root.right = dfs(mid + 1, right);

        return root;
    }
    return dfs(0, inorder.length - 1);
}
}
