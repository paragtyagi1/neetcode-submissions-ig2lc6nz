class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
    let minLength = Infinity;
    let start = 0;
    let minStart = 0;
    let map = new Map();
    let givenMap = new Map();
    let formed = 0;
    

    if (s.length < t.length) {
        return ""
    }

    if (s.length == t.length && s === t) {
            return s;
    }

    //prepare given map
    for (let x of t) {
        givenMap.set(x, (givenMap.get(x) || 0) + 1);
    }

    let needed = givenMap.size;


    //traverse
    for (let end = 0; end < s.length; end++) {
        if (givenMap.has(s[end])) {
            map.set(s[end], (map.get(s[end]) || 0) + 1);
            if (map.get(s[end]) == givenMap.get(s[end])) {
                formed++;
            }
        }

        while (formed === needed) {
            let currentLength = end - start + 1;
            if (currentLength < minLength) {
                minStart = start;
                minLength = currentLength;
            }

            if (map.has(s[start])) {
                map.set(s[start], map.get(s[start]) - 1);
                if (map.get(s[start]) < givenMap.get(s[start])) {
                    formed--;
                }
            }
            start++;
        }
    }

    return minLength === Infinity ? "" : s.slice(minStart, minStart + minLength);

}
}
