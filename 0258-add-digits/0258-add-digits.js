/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let a=num.toString().split(' ')
    if(num === 0) return 0

    return (num-1)%9 +1;
    console.log(a)
};