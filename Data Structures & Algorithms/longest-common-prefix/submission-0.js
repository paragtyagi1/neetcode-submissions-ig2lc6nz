class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = "";

        for (let i = 0; i < strs[0].length; i++) {
            const ch = strs[0][i];

            for (let j = 1; j < strs.length; j++) {
                if (i >= strs[j].length || strs[j][i] !== ch) {
                    return prefix;
                }
            }

            prefix += ch;
        }

        return prefix;
    }
}
