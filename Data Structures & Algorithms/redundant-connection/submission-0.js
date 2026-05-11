class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges){

        let graph = new Map();

        // build graph
        for (let i = 1; i <= edges.length; i++) {
            graph.set(i, []);
        }

        const dfs = (src, target, visited) => {
            if (src === target) {
                return true;
            }

            visited.add(src);

            for (const neighbor of graph.get(src)) {
                if(!visited.has(neighbor)){
                   if (dfs(neighbor,target,visited)){
                    return true;
                   }
                }
            }

            return false;
        };

        for(let [u,v] of edges){
           let visited = new Set();

           // if path already exists
           if(dfs(u,v,visited)){
                return [u,v];
           }

           // add the edge..
           graph.get(u).push(v);
           graph.get(v).push(u);
        }
    }
}
