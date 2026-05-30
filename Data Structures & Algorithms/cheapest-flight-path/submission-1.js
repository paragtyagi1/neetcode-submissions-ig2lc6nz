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
        let graph = new Map();

        for (let i = 0; i < n; i++) {
            graph.set(i, []);
        }

        for (let [source, destination, price] of flights) {
            graph.get(source).push([destination, price]);
        }

        let queue = [];
        let prices = new Array(n).fill(Infinity);
        prices[src] = 0 ; // important step..

        queue.push([src, 0, 0]);

        while (queue.length > 0) {
            let [node, cost, stops] = queue.shift();
            if (stops > k) continue;

            for (let [neighbor, price] of graph.get(node)) {
                let newCost = cost + price;
                if ( newCost < prices[neighbor]) {
                    prices[neighbor] = newCost;
                    queue.push([neighbor,newCost, stops + 1]);
                }
            }
        }

        return prices[dst] === Infinity ? -1 : prices[dst];
    }
}
