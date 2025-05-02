/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
   let newSet=new Set();
   let duplicate;
   for(let num of nums){
    if(newSet .has(num)){
        duplicate=num
    }else{
        newSet.add(num)
    }
   }
   let n=nums.length
   sum=(n * (n + 1)) / 2;
   original=nums.reduce((acc,curr)=>acc+curr,0)
   missingNum=sum-(original-duplicate)
   return [duplicate,missingNum]
};