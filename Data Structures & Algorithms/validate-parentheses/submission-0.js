class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        const pairs = {
            ")": "(",
            "]": "[",
            "}": "{",
        };

        for (const ch of s) {
            if (!(ch in pairs)) {
                stack.push(ch);
            } else {
                if (stack.pop() !== pairs[ch]) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
