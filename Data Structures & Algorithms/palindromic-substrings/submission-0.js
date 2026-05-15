class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
    
        let count = 0;

        let expand = (left, right) => {

          while (left >= 0 && right <= s.length && s[left] == s[right]) {
            count++;

            left--;
            right++;
          }

        }

        for (let i = 0; i < s.length; i++) {

            // if odd 
            expand(i, i);

            // if even
            expand(i, i + 1);
        }

    return count;

    }
}
