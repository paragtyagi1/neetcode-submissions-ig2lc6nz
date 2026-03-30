class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
    if (!digits.length) return [];
    let result= [];

    const map = {
        '2': 'abc', '3': 'def', '4': 'ghi',
        '5': 'jkl', '6': 'mno', '7': 'pqrs',
        '8': 'tuv', '9': 'wxyz'
    };



    let backtrack = (combination, index) => {
        if (index === digits.length) {
            result.push(combination);
            return;
        }

        let letters = map[digits[index]];

        for (let ch of letters) {
            backtrack(combination + ch, index + 1);
        }

    };

    backtrack("", 0);

    return result;

}
}
