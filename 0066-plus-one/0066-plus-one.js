/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
   for(var i = digits.length - 1; i >= 0; i--){
     digits[i]++; 
    if(digits[i] > 9){
        digits[i] = 0;
    }else{
        return digits;
        console.log(digits)
    }
}
digits.unshift(1);
return digits;
  
};