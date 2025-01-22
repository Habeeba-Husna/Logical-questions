/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
   let maxDistance = 0;
    for(let i=0;i<nums.length;i++){
         const nextIndex = (i + 1) % nums.length;
  const distance=Math.abs(nums[i]-nums[nextIndex])
   maxDistance = Math.max(maxDistance, distance);
    }
    return maxDistance
};