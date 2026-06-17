class CountSquares {
    constructor() {
        this.counts = new Map();
    }

    /**
     * @param {number[]} point
     * @return {void}
     */
    add(point) {
        const [x, y] = point;
        const key = `${x},${y}`;

        this.counts.set(
            key,
            (this.counts.get(key) || 0) + 1
        );
    }

    /**
     * @param {number[]} point
     * @return {number}
     */
    count(point) {
        const [x, y] = point;
        let res = 0;

        for (const [key, freq] of this.counts) {
            const [px, py] = key.split(",").map(Number);

            // Cannot be a diagonal
            if (px === x || py === y) {
                continue;
            }

            // Must form a square
            if (Math.abs(px - x) !== Math.abs(py - y)) {
                continue;
            }

            const corner1 = `${px},${y}`;
            const corner2 = `${x},${py}`;

            res +=
                freq *
                (this.counts.get(corner1) || 0) *
                (this.counts.get(corner2) || 0);
        }

        return res;
    }
}