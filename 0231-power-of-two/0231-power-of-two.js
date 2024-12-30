/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n <= 0) return 0
  return ((n & (n - 1)) === 0)

//   for(let i=0;i<31;i++){
//         if(Math.pow(2,i)==n){
//             return(true);
//         }
//         }
//         return(false);
};