class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
    let result = [];

    //sort array to encounter duplicates
    candidates.sort((a, b) => a - b);
    let backtrack = (path, index, sum) => {

        if (sum === target) {
            result.push([...path]);
            return;
        }

        if (sum > target || index === candidates.length) {
            return;
        }

        // choosing to take currentValue
        path.push(candidates[index]);
        backtrack(path, index + 1, sum + candidates[index]);

        //not choosing to take currentValue
        path.pop();
        
        let nextIndex = index + 1;
        while (nextIndex < candidates.length && candidates[index] === candidates[nextIndex]) {
            nextIndex++;
        }
        backtrack(path, nextIndex, sum);
    }

    backtrack([], 0, 0);
    return result;
}
}
