class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);

        let count = 0;
        let prevEnd = intervals[0][1];

        for (let i = 1; i < intervals.length; i++) {
            let [start, end] = intervals[i];

            if (start < prevEnd) {
                count++;

                // keep interval with smaller end
                prevEnd = Math.min(prevEnd, end);
            } else {
                prevEnd = end;
            }
        }

        return count;
    }
}
