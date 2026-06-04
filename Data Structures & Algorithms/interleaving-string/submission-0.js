class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        if (s1.length + s2.length !== s3.length) {
            return false;
        }

        const memo = new Map();

        function solve(i, j) {
            if (i === s1.length && j === s2.length) {
                return true;
            }

            const key = `${i},${j}`;

            if (memo.has(key)) {
                return memo.get(key);
            }

            const k = i + j;

            let fromS1 = false;
            let fromS2 = false;

            if (i < s1.length && s1[i] === s3[k]) {
                fromS1 = solve(i + 1, j);
            }

            if (j < s2.length && s2[j] === s3[k]) {
                fromS2 = solve(i, j + 1);
            }

            const result = fromS1 || fromS2;

            memo.set(key, result);

            return result;
        }

        return solve(0, 0);
    }
}
