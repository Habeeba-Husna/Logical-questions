/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    // let numSet = new Set(nums);
    // let maxK = -1;
    // for (let num of nums) {
    //     if (num > 0 && numSet.has(-num)) {
    //         maxK = Math.max(maxK, num);
    //     }
    // }
    // return maxK;


    let i = 0;
    let value = -1;
    while(i <nums.length){
        if(nums[i] > value && nums.includes(-nums[i])){
            value = nums[i];
        }
        i++;
    }
    return value;
};