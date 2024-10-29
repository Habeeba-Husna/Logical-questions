A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
```javascript
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
