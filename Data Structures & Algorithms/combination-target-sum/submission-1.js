class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = [];
        let backtrack = (path, index, sum) =>{

            if(sum === target){
                result.push([...path]);
                return;
            }
        
            if(index == nums.length || sum > target){
                return;
            }

            // Pick same element and sum it and choose to go with same index
            path.push(nums[index]);
            backtrack(path,index,sum+nums[index]);

            //Choose not to pick current and pick next intead
            path.pop();
            backtrack(path,index+1,sum);
            
        }
        backtrack([],0,0);

        return result;

    }
}
