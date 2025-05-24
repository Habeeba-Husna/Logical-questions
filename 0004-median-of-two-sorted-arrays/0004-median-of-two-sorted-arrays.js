/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
   let result=nums1.concat(nums2).sort((a,b)=>a-b)
   let length=result.length;
   const middle=Math.floor(length/2)
   if(length%2==0){
    return (result[middle - 1] + result[middle]) / 2;
   }else{
    return result[middle]
   }
};