class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        let left = 0;
        let right = nums.length - 1;

        let mergeSort = (start, end) => {
            if (start === end) return [nums[start]];

            let mid = start + Math.floor((end - start) / 2);

            let l = mergeSort(start, mid);
            let r = mergeSort(mid + 1, end);

            return merge(l, r);
        };

        let merge = (l, r) => {
            let result = [];
            let i = 0;
            let j = 0;

            while (i < l.length && j < r.length) {
                if (l[i] < r[j]) {
                    result.push(l[i]);
                    i++;
                } else {
                    result.push(r[j]);
                    j++;
                }
            }

            return [...result, ...l.slice(i), ...r.slice(j)];
        };

        return mergeSort(left, right);
    }
}
