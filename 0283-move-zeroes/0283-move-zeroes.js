/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
     for(var i = nums.length;i--;){
        if(nums[i]===0){
            nums.splice(i,1)
            nums.push(0);
        }
    }

//     let a = 0;
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] !== 0) {
//         [nums[i], nums[a]] = [nums[a], nums[i]];//swapping array destructuring
//             a++;
//         }
//     }
};