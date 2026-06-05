class Solution {
    longestIncreasingPath(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        const dirs = [
            [0, 1],
            [1, 0],
            [-1, 0],
            [0, -1],
        ];

        let memo = new Map();

        function dfs(r, c) {
            let key = `${r},${c}`;
            if(memo.has(key)) return memo.get(key)
            let best = 1;

            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) {
                    continue;
                }

                if (matrix[nr][nc] > matrix[r][c]) {
                    best = Math.max(best, 1 + dfs(nr, nc));
                }
            }

            memo.set(key,best);
            return best;
        }

        let answer = 0;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                answer = Math.max(answer, dfs(r, c));
            }
        }

        return answer;
    }
}
