class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        let n = text1.length;
        let m = text2.length;

        //let dp = new Araay({length:n},()=> new Array(n));
        let memo = new Map();

        let solve = (i, j) => {
            let key = `${i},${j}`;

            if (i === n || j === m) {
                return 0;
            }

            if (memo.has(key)) return memo.get(key);

            let ans;

            if (text1[i] === text2[j]) {
                ans = 1 + solve(i + 1, j + 1);
            } else {
                ans = Math.max(solve(i, j + 1), solve(i + 1, j));
            }

            memo.set(key, ans);
            return ans;
        };
        return solve(0, 0);
    }
}
