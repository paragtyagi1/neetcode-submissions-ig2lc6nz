class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let memo = [];


        let dfs = (n)=>{
             if(n <= 2 ) return n;

             if(memo[n]) return memo[n];

             memo[n] = dfs(n-1) + dfs(n-2);

             return memo[n];
        }

        return dfs(n);
    }
}
