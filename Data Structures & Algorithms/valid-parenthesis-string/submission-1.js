class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        const openStack = [];
        const starStack = [];

        for (let i = 0; i < s.length; i++) {
            if (s[i] === "(") {
                openStack.push(i);
            } else if (s[i] === "*") {
                starStack.push(i);
            } else {
                if (openStack.length) {
                    openStack.pop();
                } else if (starStack.length) {
                    starStack.pop();
                } else {
                    return false;
                }
            }
        }

        while (openStack.length && starStack.length) {
            const openIdx = openStack.pop();
            const starIdx = starStack.pop();

            if (openIdx > starIdx) {
                return false;
            }
        }

        return openStack.length === 0;
    }
}
