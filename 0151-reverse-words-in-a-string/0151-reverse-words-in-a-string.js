/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let a=s.trim().split(' ').filter(word => word !== '').reverse().join(' ')
    console.log(a);
    return a
};