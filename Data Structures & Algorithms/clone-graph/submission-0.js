class Solution {
    cloneGraph(node) {
        if (!node) return null;

        let map = new Map(); // original -> clone
        let queue = [node];

        // clone first node
        map.set(node, new Node(node.val));

        while (queue.length) {
            let curr = queue.shift();

            for (let neighbor of curr.neighbors) {
                if (!map.has(neighbor)) {
                    map.set(neighbor, new Node(neighbor.val));
                    queue.push(neighbor);
                }

                // connect clone neighbors
                map.get(curr).neighbors.push(map.get(neighbor));
            }
        }

        return map.get(node);
    }
}