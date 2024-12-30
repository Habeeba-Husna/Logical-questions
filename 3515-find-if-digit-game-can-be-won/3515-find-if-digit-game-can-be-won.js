/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    // let sum=0
    // for(let i=0;i<nums.length-1;i++){
    //     sum+=nums[i]
    //     console.log(sum)
    //     if(sum===nums[nums.length-1])return false
        
    //         // if(sum>nums[nums.length-1]) return false
 
    // }
    //     return true
    
    let arr1=[]
    let arr2=[]
    for(let i of nums){
        if(i>9){
            arr1.push(i)     
        }else{
            arr2.push(i)
        }
    }
    let sum1=arr1.reduce((acc,curr)=>acc+curr,0)
    let sum2=arr2.reduce((acc,curr)=>acc+curr,0)
    if(sum1===sum2){
        return false
    }else
    return true

};