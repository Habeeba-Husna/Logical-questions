/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
       let count = 0;
    for(let i=1,j=0; i<=arr.length+k;i++){
        if(arr[j] && arr[j]===i){
            j++;
        }else{
            count++;
            if(count===k){
                return i
            }
        }
    }
};