/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x==x.toString().split('').reverse().join('')){
    return true
    }
    else{
        return false
    }   
        
};