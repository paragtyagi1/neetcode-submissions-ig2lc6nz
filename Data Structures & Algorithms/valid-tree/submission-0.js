class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        let graph = new Map();
        let visited  = new Set();

        for(let i=0; i<n ; i++){
           graph.set(i,[]);
        }

        for(let [v1,v2] of edges){
           graph.get(v1).push(v2);
           graph.get(v2).push(v1);
        }

        const dfs = (node, parent) => {

            // cycle detected
            if (visited.has(node)) {
                return false;
            }

            visited.add(node);

            for (const neighbor of graph.get(node)) {

                // skip edge back to parent
                if (neighbor === parent) {
                    continue;
                }

                if (!dfs(neighbor, node)) {
                    return false;
                }
            }

            return true;
        };


        // detect cycle
        if (!dfs(0, -1)) {
            return false;
        }

        // check fully connected
        return visited.size === n;

    }
}
