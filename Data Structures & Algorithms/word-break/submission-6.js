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

            if(memo.has(word)) return memo.get(word);

            for (let i = 0; i < word.length; i++) {
                let substring = word.slice(0, i+1);
                if (wordSet.has(substring)) {
                    if (solve(word.slice(i + 1))) {
                        memo.set(word.slice(i + 1),true);
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
