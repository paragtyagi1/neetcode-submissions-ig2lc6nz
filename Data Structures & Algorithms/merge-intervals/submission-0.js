class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        let result = [];

        intervals.sort((a, b) => a[0] - b[0]);

        result.push(intervals[0]);

        for (let i = 1; i < intervals.length; i++) {
            let last = result[result.length - 1];
            let current = intervals[i];

            if (last[1] >= current[0]) {
                last[1] = Math.max(current[1], last[1]);
            } else {
                result.push(current);
            }
        }
        return result;
    }
}
