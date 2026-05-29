class Solution {
    foreignDictionary(words) {
        const graph = new Map();

        for (const word of words) {
            for (const ch of word) {
                graph.set(ch, []);
            }
        }

        for (let i = 0; i < words.length - 1; i++) {
            const w1 = words[i];
            const w2 = words[i + 1];

            if (
                w1.length > w2.length &&
                w1.startsWith(w2)
            ) {
                return "";
            }

            const len = Math.min(w1.length, w2.length);

            for (let j = 0; j < len; j++) {
                if (w1[j] !== w2[j]) {
                    graph.get(w1[j]).push(w2[j]);
                    break;
                }
            }
        }

        const visiting = new Set();
        const visited = new Set();
        const result = [];

        function dfs(node) {

            if (visiting.has(node)) {
                return false;
            }

            if (visited.has(node)) {
                return true;
            }

            visiting.add(node);

            for (const nei of graph.get(node)) {
                if (!dfs(nei)) {
                    return false;
                }
            }

            visiting.delete(node);
            visited.add(node);

            result.push(node);

            return true;
        }

        for (const node of graph.keys()) {
            if (!dfs(node)) {
                return "";
            }
        }

        return result.reverse().join("");
    }
}