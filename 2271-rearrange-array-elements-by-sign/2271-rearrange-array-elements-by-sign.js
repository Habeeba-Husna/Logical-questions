/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let positive = nums.filter(x => x > 0)
    let negative = nums.filter(x => x < 0)
    let result = []

    for (let i = 0; i < nums.length / 2; i++) {
        result.push(positive[i], negative[i])
    }

    return result
};