/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let result = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    console.log(result)
   let a= result.split('').reverse().join('')
    // if(result==a){
    //     return true;
    // }else{
    //     return false
    // }
   return result==a
};
