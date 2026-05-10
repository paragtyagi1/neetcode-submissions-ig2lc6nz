class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {

        // Build graph
        const graph = new Map();

        for (let i = 0; i < numCourses; i++) {
            graph.set(i, []);
        }

        for (const [course, pre] of prerequisites) {
            graph.get(pre).push(course);
        }

        const visiting = new Set();
        const visited = new Set();

        const result = [];

        const dfs = (course) => {

            // cycle detected
            if (visiting.has(course)) {
                return false;
            }

            // already processed
            if (visited.has(course)) {
                return true;
            }

            // mark current recursion path
            visiting.add(course);

            for (const neighbor of graph.get(course)) {
                if (!dfs(neighbor)) {
                    return false;
                }
            }

            // backtrack
            visiting.delete(course);

            // mark fully processed
            visited.add(course);

            // postorder push
            result.push(course);

            return true;
        };

        // run DFS for every course
        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) {
                return [];
            }
        }

        // reverse for topological order
        return result.reverse();
    }
}