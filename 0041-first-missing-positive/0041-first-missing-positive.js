/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums.sort((a,b)=>a-b);
    let small=1;
   for(let i=0;i<nums.length;i++){
        if (nums[i] === small) {
            small++;
   } 
   }
   return small
};