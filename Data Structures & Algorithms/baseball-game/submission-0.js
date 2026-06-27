class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let result = [];
        for (let operation of operations) {
            if (operation === "+") {
                if (result.length >= 2) {
                    let first = result[result.length - 1];
                    let second = result[result.length - 2];

                    result.push(Number(first) + Number(second));
                }
            } else if (operation === "C") {
                result.pop();
            } else if (operation === "D") {
                let number = result[result.length - 1];
                result.push(2 * Number(number));
            } else {
                result.push(Number(operation));
            }
        }

       
        return result.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }
}
