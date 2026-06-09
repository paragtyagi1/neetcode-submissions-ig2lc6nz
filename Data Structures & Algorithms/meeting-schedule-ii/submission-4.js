/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const starting = intervals.map((i) => i.start).sort((a, b) => a - b);
        const ending = intervals.map((i) => i.end).sort((a, b) => a - b);

        let res = 0 
        let count = 0  
        let start = 0
        let end = 0;
        while (start < intervals.length) {
            if (starting[start] < ending[end]) {
                start++;
                count++;
            } else {
                end++;
                count--;
            }
            res = Math.max(res, count);
        }
        return res;
    }
}
