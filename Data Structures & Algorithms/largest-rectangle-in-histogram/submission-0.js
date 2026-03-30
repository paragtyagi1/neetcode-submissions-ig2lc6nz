class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [];
        let maxArea = 0;
        let n = heights.length
    
        for(let i=0;i<=n; i++){
            let currentHeight =  i === n ? 0: heights[i];
             
            while(stack.length && heights[stack[stack.length-1]]>currentHeight){
                   let topIndex = stack.pop();
                   let height = heights[topIndex];
                   
                   let pse = stack.length === 0 ? -1 : stack[stack.length-1];
                   let nse = i;

                   let width = nse-pse-1;
                   maxArea = Math.max(maxArea,height*width);
            }
            stack.push(i);
        }
        return maxArea;
    }
}
