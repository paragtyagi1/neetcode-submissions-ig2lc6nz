class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        const graph = new Map();

        for (let i = 0; i < n; i++) {
            graph.set(i, []);
        }

        for (const [u, v, price] of flights) {
            graph.get(u).push([v, price]);
        }

        const dist = new Array(n).fill(Infinity);
        dist[src] = 0;

        // [node, cost, stops]
        const queue = [[src, 0, 0]];

        while (queue.length) {
            const [node, cost, stops] = queue.shift();

            // stop exploring further
            if (stops > k) {
                continue;
            }

            for (const [nei, price] of graph.get(node)) {
                const newCost = cost + price;

                if (newCost < dist[nei]) {
                    dist[nei] = newCost;

                    queue.push([nei, newCost, stops + 1]);
                }
            }
        }

        return dist[dst] === Infinity ? -1 : dist[dst];
    }
}
