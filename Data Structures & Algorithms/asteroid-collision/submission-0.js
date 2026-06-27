class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack = [];

        for (let i = 0; i < asteroids.length; i++) {
            let current = asteroids[i];
            while (current < 0 && stack[stack.length - 1] > 0 && stack.length > 0) {
                let stackTop = stack.pop();
                if (Math.abs(current) > Math.abs(stackTop)) {
                    current = current;
                } else if (Math.abs(current) < Math.abs(stackTop)) {
                    current = stackTop;
                } else {
                    current = 0;
                }
            }
            if (current !== 0) stack.push(current);
        }

        return stack;
    }
}
