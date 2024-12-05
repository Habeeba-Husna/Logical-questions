/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let a = pattern.split('');
    let b = s.split(' ');
    console.log(b)
      let a1 = ''
    for (let i = 0; i < a.length; i++) {
        a1 += a.indexOf(a[i]);
        console.log(a1)
    }
    let b1 = ''
    for (let i = 0; i < b.length; i++) {
        b1 += b.indexOf(b[i]);
        console.log(b1)
    }
    return a1 === b1;
};