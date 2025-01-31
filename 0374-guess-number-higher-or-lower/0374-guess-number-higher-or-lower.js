/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 1, right = n;
    while (left <= right) {
        let mid = ((left + right) / 2) << 0; 
        let res = guess(mid);
        if (res === 0) {
            return mid;
        } else if (res === -1) {
            right = mid - 1;
        } else {
            left = mid + 1; 
        }
    }  
    return -1; 
};

// const guessNumber = (right, left = 1) => {
//   const mid = ((left + right) / 2) << 0;
//   console.log(mid)
//   switch(guess(mid)) {
//     case 0:
//       return mid;
//     case -1:
//       return guessNumber(mid-1,left);
//     case 1:
//       return guessNumber(right,mid+1);
//   }
// };