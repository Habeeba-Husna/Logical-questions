/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    // let arr1=[]
    // let arr2=[]
    // for(let i of nums){
    //     if(i>9){
    //         arr1.push(i)     
    //     }else{
    //         arr2.push(i)
    //     }
    // }
    // let sum1=arr1.reduce((acc,curr)=>acc+curr,0)
    // let sum2=arr2.reduce((acc,curr)=>acc+curr,0)
    // if(sum1===sum2){
    //     return false
    // }else
    // return true

let single = 0;
    let double = 0;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] < 10) {
            single += nums[i]
        } else {
            double +=nums[i]
        }
    }

    if (single === double) {
        return false 
    } else {
        return true
    }
};