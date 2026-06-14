class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let result = 0;
        let num = 0;
        while (x !== 0) {
            num = x % 10;
            result = result * 10 + num;
            x = (x - num) / 10;
        }
        if (result < 2 ** 31 * -1 || result > 2 ** 31) {
            return 0;
        }
        return result;
    }
}
