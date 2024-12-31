/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let sortedArray=matrix.flat(2).sort((a,b)=>a-b)
    console.log(sortedArray)
    return sortedArray[k - 1];
};