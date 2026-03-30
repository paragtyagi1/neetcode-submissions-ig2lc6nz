class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
    let result = [];

    let backtrack = (str, open, closed) => {
        if (str.length === 2 * n) {
            result.push(str);
            return;
        }

        // add "("
        if (open < n) {
            backtrack(str + "(", open + 1, closed);
        }

        // add ")"
        if (open > closed) {
            backtrack(str + ")", open, closed + 1);
        }
    }

    backtrack("", 0, 0);
    return result;
}
}
