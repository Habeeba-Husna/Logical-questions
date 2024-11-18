/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
   let sorted=nums.sort((a,b)=>a-b);
   let minimum=Infinity
   for (let i = 0; i <= nums.length - k; i++) {
    let min=nums[i];
    let max=nums[i+k-1];
    let difference=max-min
    if(difference<minimum){
        minimum=difference
    }
   }
    return minimum

    //  const sorted = nums.sort((a, b) => a - b)

    // let min = Infinity
    // for (let i = 0;i < nums.length - k + 1;i++) {
    //     min = Math.min(min, nums[i + k - 1] - nums[i])
    // }
    // return min ?? 0
}