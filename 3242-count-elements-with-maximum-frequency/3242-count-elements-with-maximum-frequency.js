/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
     let frequency = {}
    for (let num of nums) {
        frequency[num] = (frequency[num] || 0) + 1
    }

    let max = 0;
    for (let key in frequency) {
        if (frequency[key] > max) {
            max = frequency[key]
        }
    }

    let res = 0;
    for (let key in frequency) {
        if (frequency[key] == max) {
            res += max;
        }
    }
    return res;
};