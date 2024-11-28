/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let a;
    // return a=s.trim().split(' ').filter(word => word !== '').reverse().join(' ')
    return a=s.trim().split(/\s+/).reverse().join(' ')
    // console.log(a);
};
