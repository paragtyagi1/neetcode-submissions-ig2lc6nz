class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) {
            return false;
        }

        const count = new Map();

        for (const card of hand) {
            count.set(card, (count.get(card) || 0) + 1);
        }

        const cards = [...count.keys()].sort((a, b) => a - b);

        for (const card of cards) {
            const freq = count.get(card);

            if (freq > 0) {
                for (let next = card; next < card + groupSize; next++) {
                    if ((count.get(next) || 0) < freq) {
                        return false;
                    }

                    count.set(next, count.get(next) - freq);
                }
            }
        }

        return true;
    }
}
