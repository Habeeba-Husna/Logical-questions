/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
   
    let start=nums.indexOf(target)
    let end=nums.lastIndexOf(target)
    console.log(end)
    return [start,end]
};