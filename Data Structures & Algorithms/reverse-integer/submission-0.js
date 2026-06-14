class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let result = 0;

        while (x !== 0) {
            const digit = x % 10;

            result = result * 10 + digit;

            x = Math.trunc(x / 10);
        }

        if (result < -(2 ** 31) || result > 2 ** 31 - 1) {
            return 0;
        }

        return result;
    }
}
