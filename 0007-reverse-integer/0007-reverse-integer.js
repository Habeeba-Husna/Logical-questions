/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // if(x<0){
    //    (x.toString().split('').slice(1).reverse().join(''))*-1
    
    // }else if{
    //    Number(x.toString().split('').reverse().join())
    // }
    // }
    let reverse = Math.abs(x).toString().split('').reverse().join('');
    console.log(reverse)
    reversed = x < 0 ? -Number(reverse) : Number(reverse);
     console.log(reversed)
     if (reverse < -(2 ** 31) || reverse > 2 ** 31 - 1) {
    return 0;
}
return reversed;
};