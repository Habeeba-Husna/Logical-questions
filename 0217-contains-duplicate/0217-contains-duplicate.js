/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // return nums.some((num, index) => nums.indexOf(num) !== nums.lastIndexOf(num));

    let uniqueNums = new Set(nums);
    return uniqueNums.size !== nums.length;
};