/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let words = text.split(' '); 
    let broken = new Set(brokenLetters);
    console.log(broken)
    let count = 0;

    for (let word of words) {
        if (![...word].some(char => broken.has(char))) {
            count++;
        }
    }
    return count;
};