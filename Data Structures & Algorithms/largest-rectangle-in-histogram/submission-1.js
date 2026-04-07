class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack= [];
        let maxArea = 0;

        for ( let i = 0; i <= heights.length; i++ ) {
        let currentHeight =  i === heights.length ? 0: heights[i];
           while(stack.length > 0 && heights[stack[stack.length-1]]>currentHeight){
             
            let height = heights[stack.pop()];

            let pse = stack.length === 0 ? -1 : stack[stack.length-1]; // edge case handling.. 
            let nse = i; 

            let width = nse-pse-1;
            maxArea = Math.max(maxArea,height*width);

           }
           stack.push(i)
        }

        return maxArea;

    }
}
