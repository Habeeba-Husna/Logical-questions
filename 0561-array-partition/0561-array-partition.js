/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    // for(let i=0;i<nums.length;i++){
    //     for(let j=i+1;j<nums.length;j++){
    //         if(Math.min(nums[i,i+1]+nums[]))
    //     }
    // }
    nums.sort((a,b)=>a-b);
    let sum=0
    // for(let i=0;i<nums.length;i++){
    //     if(i%2===0){
    //         sum+=nums[i]
    //     }
    // }
     for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i]
        // let n = Math.min(nums[i],nums[i+1]);
        //     sum = sum+n
    }
    return sum
};