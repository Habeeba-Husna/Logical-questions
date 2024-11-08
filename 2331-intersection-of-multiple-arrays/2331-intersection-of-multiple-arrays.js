/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    const a=nums.map(x=>x.sort((a,b)=>a-b))
    // console.log(a)
   const b=a.reduce((acc,curr)=>{
    return  acc.filter(num=>curr.includes(num))
   })
//  console.log(b)

   return b;
};