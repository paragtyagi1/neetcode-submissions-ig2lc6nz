class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let wordSet = new Set();

        for (let word of wordDict) {
            wordSet.add(word);
        }

        let memo = new Map();

        let solve = (word) => {
            if (word.length === 0) {
                return true;
            }

            for (let i = 0; i < word.length; i++) {
                let substring = word.slice(0, i+1);
                if (wordSet.has(substring)) {
                    if(memo.has(word.slice(i + 1))) return memo.get(word.slice(i + 1));
                    if (solve(word.slice(i + 1))) {
                        return true;
                    }
                    memo.set(word.slice(i + 1),false);
                }
            }

            return false;
        };

        return solve(s);
    }
}
