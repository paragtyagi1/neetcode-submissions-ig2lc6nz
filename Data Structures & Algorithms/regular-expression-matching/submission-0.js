class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    isMatch(s, p) {
        function solve(i, j) {
            if (j === p.length) {
                return i === s.length;
            }

            const match = i < s.length && (s[i] === p[j] || p[j] === ".");

            if (j + 1 < p.length && p[j + 1] === "*") {
                return solve(i, j + 2) || (match && solve(i + 1, j));
            }

            return match && solve(i + 1, j + 1);
        }

        return solve(0, 0);
    }
}
