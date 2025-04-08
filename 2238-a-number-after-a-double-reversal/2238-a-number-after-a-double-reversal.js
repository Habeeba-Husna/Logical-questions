/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    // let a=num.toString().split('').reverse()
    // console.log(a)

      if (num === 0) return true;
    return num % 10 !== 0;
};