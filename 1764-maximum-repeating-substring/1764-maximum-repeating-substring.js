/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
      let count=0;
  	let words=word
    while(sequence.includes(word)===true) {
        word=word+words
        console.log(word)
      	count++
    }
  return count 
};