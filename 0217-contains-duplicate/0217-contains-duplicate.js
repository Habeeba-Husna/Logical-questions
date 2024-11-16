/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // return nums.some((num, index) => nums.indexOf(num) !== nums.lastIndexOf(num));

    // let uniqueNums = new Set(nums);
    // return uniqueNums.size !== nums.length;

      const mySet = new Set()
    for(let item of nums){
        if(mySet.has(item)){
            return true
        }
        mySet.add(item)
    }

    return false
};