/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
    let count = 0;
    const totalSum = nums.reduce((acc, num) => acc + num, 0); 
    let leftSum = 0; 

    for (let i = 0; i < nums.length - 1; i++) {
        leftSum += nums[i]; 
        let rightSum = totalSum - leftSum;
        if ((leftSum - rightSum) % 2 === 0) count++;
    }
    return count;
};