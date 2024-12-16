/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let a=nums.sort((a,b)=>a-b);
    let small=1;
    console.log(a)
   for(let i=0;i<a.length;i++){
        if (a[i] === small) {
            small++;
   } 
   }
   return small
};