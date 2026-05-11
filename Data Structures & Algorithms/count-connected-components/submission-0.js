class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {

        let graph = new Map();
        let visited = new Set();
        let count = 0;

        // build graph
        for (let i = 0; i < n; i++) {
            graph.set(i, []);
        }

        for (let [v1, v2] of edges) {
            graph.get(v1).push(v2);
            graph.get(v2).push(v1);
        }

        const dfs = (node) => {

            if (visited.has(node)) {
                return;
            }

            visited.add(node);

            for (const neighbor of graph.get(node)) {
                dfs(neighbor);
            }
        };

        for (let i = 0; i < n; i++) {

            if (!visited.has(i)) {
                count++;
                dfs(i);
            }
        }

        return count;
    }
}