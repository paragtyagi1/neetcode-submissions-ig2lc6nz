class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {

    let isPalindrome = (str) => {
        let left = 0; let right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) return false
            left++;
            right--;
        }
        return true;
    }

    let result = [];

    let backtrack = (s, partitions) => {
        if (s.length == 0) {
            result.push([...partitions]);
            return;
        }

        for (let i = 0; i < s.length; i++) {
            let partition = s.substring(0, i + 1);
            if (isPalindrome(partition)) {
                partitions.push(partition);

                backtrack(s.substring(i + 1), partitions);

                partitions.pop();
            }
        }
    }

    backtrack(s, []);
    return result;
}
}
