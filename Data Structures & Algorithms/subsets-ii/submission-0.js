class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let result= [];
        nums.sort((a,b)=>a-b);

        let backtrack = (path,index)=>{
          if(index === nums.length){
            result.push([...path]);
            return;
          }

          path.push(nums[index]);
          backtrack(path,index+1);

          path.pop();
          let nextIndex = index+1;

          while(nums[nextIndex] == nums[index]){
            nextIndex++
          }
          backtrack(path,nextIndex);
        }
        backtrack([],0);
        return result;
    }
}
