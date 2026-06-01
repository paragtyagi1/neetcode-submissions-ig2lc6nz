class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        let n = s.length;
        let memo = new Map();
        let solve = (i) => {
            if (i < 0) return 1;

            let ways = 0;

            if(memo.has(i)) return memo.get(i);

            // use current digit
            if (s[i] !== "0") {
                ways += solve(i - 1);
            }

            // use two digits
            if (i > 0) {
                let num = Number(s.slice(i - 1, i + 1));
 
                if (num >= 10 && num <= 26) {
                    ways += solve(i - 2);
                }
            }
            memo.set(i,ways);
            return ways;
        };

        return solve(n - 1);
    }
}
