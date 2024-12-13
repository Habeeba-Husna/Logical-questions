/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //  const a =  x>0? parseInt(x.toString().split('').reverse().join('')): -1*parseInt((-1*x).toString().split('').reverse().join(''))
    // if(a> Math.pow(2, 31)-1 || a< Math.pow(-2, 31)) {
    //     return 0;
    // }else{
    //     return a;
    // }
    let reverse = Math.abs(x).toString().split('').reverse().join('');
    console.log(reverse)
    reversed = x < 0 ? -Number(reverse) : Number(reverse);
     console.log(reversed)
    //  if (reversed < -(2 ** 31) || reversed > 2 ** 31 - 1) {
    // return 0;
    if(reversed> Math.pow(2, 31)-1 || reversed< Math.pow(-2, 31)) {
        return 0;
}
return reversed;
};