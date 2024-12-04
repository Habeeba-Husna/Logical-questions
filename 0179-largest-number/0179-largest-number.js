/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums=nums.map(String);
    nums.sort((a,b)=>(b+a)-(a+b));
    let result=nums.join('')
    console.log(result)
    return result[0] === '0' ? '0' : result;
};