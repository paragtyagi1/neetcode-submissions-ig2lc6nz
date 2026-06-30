class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let stack = [];

        let currentNum = 0;
        let currentString = "";
        for (let ch of s) {
            if (!isNaN(ch)) {
                currentNum = currentNum * 10 + Number(ch);
            } else if (ch === "[") {
                stack.push([currentString, currentNum]);

                currentNum = 0;
                currentString = "";
            } else if (ch === "]") {
                let [prevString, prevNum] = stack.pop();
                currentString = prevString + currentString.repeat(prevNum);
            } else {
                currentString += ch;
            }
        }

        return currentString;
    }
}
