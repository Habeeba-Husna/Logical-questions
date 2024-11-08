/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   
      // nums.splice(0, nums.length, ...(new Set(nums)));
    
    //another mthd
    
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i]) 
            nums[++i] = nums[j];
    }
    return ++i;
};
