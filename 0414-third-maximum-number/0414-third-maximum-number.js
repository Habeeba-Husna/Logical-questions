/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
   let sorted = nums.sort((a,b)=> b-a)
//    console.log(sorted)
    let unique = [...new Set(sorted)];
    // console.log(unique)
    if(unique.length >=3) return unique[2]
    return unique[0]
    // return unique.length>=3?unique[2]:unique[0]
};