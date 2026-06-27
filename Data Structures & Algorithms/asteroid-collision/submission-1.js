class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];

        for (const asteroid of asteroids) {
            let current = asteroid;

            while (stack.length && current < 0 && stack[stack.length - 1] > 0) {
                const top = stack.pop();

                if (Math.abs(current) > Math.abs(top)) {
                    // current survives
                    continue;
                } else if (Math.abs(current) < Math.abs(top)) {
                    current = top;
                } else {
                    current = 0;
                }
            }

            if (current !== 0) {
                stack.push(current);
            }
        }

        return stack;
    }
}
