var merge = function(nums1, m, nums2, n) {
    for (let i=m ,j=0 ;i<n+m,j<n ;i++,j++) {
      nums1[i] = nums2[j];
    } 
    nums1.sort((a, b) => a - b);
};
const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(nums1);

