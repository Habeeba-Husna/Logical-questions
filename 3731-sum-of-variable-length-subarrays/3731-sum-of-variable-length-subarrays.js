/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function(nums) {
   let result = [];
    for(let i=0;i<nums.length;i++){
        let start = Math.max(0, i - nums[i]);
        let subarray = nums.slice(start, i + 1);
        let sum = subarray.reduce((acc, curr) => acc + curr, 0); 
        result.push(sum);
    }
    return result.reduce((acc, curr) => acc + curr, 0);
};