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
    
    let a=[]
    let b=[]
    for(let c of nums){
        if(c>9){
            a.push(c)
           
        }else{
            b.push(c)
            
        }

    }
    let d=a.reduce((acc,curr)=>acc+curr,0)
    console.log(d)
    let e=b.reduce((acc,curr)=>acc+curr,0)
    // if(a<b) return true
    if(d===e){
        return false
    }else
    return true

};