class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        if (n === 0) return 1;

        if (n < 0) {
            x = 1 / x;
            n = -n;
        }

        function fastPow(x, n) {
            if (n === 0) return 1;

            const half = fastPow(x, Math.floor(n / 2));

            if (n % 2 === 0) {
                return half * half;
            }

            return half * half * x;
        }

        return fastPow(x, n);
    }
}
