class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {

        let longest = "";

        // Expands outward from center
        const expand = (left, right) => {

            while (
                left >= 0 &&
                right < s.length &&
                s[left] === s[right]
            ) {

                // Current palindrome
                let current = s.slice(left, right + 1);

                // Update answer
                if (current.length > longest.length) {
                    longest = current;
                }

                // Expand outward
                left--;
                right++;
            }
        };

        for (let i = 0; i < s.length; i++) {

            // Odd length palindrome
            expand(i, i);

            // Even length palindrome
            expand(i, i + 1);
        }

        return longest;
    }
}