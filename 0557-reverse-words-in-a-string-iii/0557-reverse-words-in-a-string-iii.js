/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    //   let a = s.split(" ");
    //   console.log(a)
    // for(let i = 0; i < a.length; i++){
    //     a[i]=a[i].split("").reverse().join("");
    //     console.log(a[i])
    // }
    // return a.join(" ");
    
     return s.split(' ').map((a)=>a.split('').reverse().join('')).join(' ')
    
};