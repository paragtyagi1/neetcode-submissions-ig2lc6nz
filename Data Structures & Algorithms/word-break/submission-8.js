class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {

        const wordSet = new Set(wordDict);

        const memo = new Map();

        const solve = (word) => {

            // Successfully segmented everything
            if (word.length === 0) {
                return true;
            }

            // Memoized result
            if (memo.has(word)) {
                return memo.get(word);
            }

            // Try every prefix
            for (let i = 0; i < word.length; i++) {

                let prefix = word.slice(0, i + 1);

                // If prefix exists in dictionary
                if (wordSet.has(prefix)) {

                    let remaining = word.slice(i + 1);

                    // Recursively solve remaining suffix
                    if (solve(remaining)) {

                        memo.set(word, true);

                        return true;
                    }
                }
            }

            // No valid segmentation found
            memo.set(word, false);

            return false;
        };

        return solve(s);
    }
}