/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let s=new Set(sentence)
    console.log(s)
    return s.size===26
};