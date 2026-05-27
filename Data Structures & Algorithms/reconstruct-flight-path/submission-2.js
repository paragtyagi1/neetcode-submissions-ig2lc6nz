class Solution {
    findItinerary(tickets) {
        const graph = new Map();


        // construct a graph
        for (const [src, dst] of tickets) {
            if (!graph.has(src)) {
                graph.set(src, []);
            }

            graph.get(src).push(dst);
        }

        // create lexical ordering of desitinations of sources
        for (const [src, list] of graph) {
            list.sort();
        }

        const route = [];

        function dfs(airport) {
            const destinations = graph.get(airport) || [];

            while (destinations.length) {
               dfs(destinations.shift()); 
            }

            route.push(airport);
        }

        dfs("JFK");

        return route.reverse();
    }
}