/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
      // for(let i=0;i<nums.length;i++){
      // if(nums.indexOf(nums[i])==nums.lastIndexOf(nums[i])){
      //     return nums[i];
      // }
      // }
    
    ///////////////////
    // const a=nums.filter((x)=>nums.indexOf(x)==nums.lastIndexOf(x));
    // console.log(a)
    // return a[0]
    
    ////////////////////////////
//     let x=0;
//     for(let n of nums){
//         x=x^n
//     }
//       return x
    /////////////////////////
    
   
    for(let i=0;i<nums.length;i++){
         let count=0;
        for(let j=0;j<nums.length;j++){
           if(nums[i]==nums[j] && (i!=j)) {
              count=1
           }
        }
    if (count == 0) {
        return nums[i]; 
           
        }
    }
}