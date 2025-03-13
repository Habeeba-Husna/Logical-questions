/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum=0;
    let arr = []
    const a=nums.reduce((acc,curr)=>acc+curr,0);
    for(let i=0;i<nums.length;i++){
        arr.push(nums[i].toString().split(''))
    }
    sum=arr.flat().map(Number).reduce((acc,curr)=>acc+curr,0)
    return Math.abs(a-sum)
};