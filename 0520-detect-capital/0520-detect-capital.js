/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word==word.toLowerCase()||word==word.toUpperCase()||word === word[0].toUpperCase() + word.slice(1).toLowerCase()){
        return true
    }
    return false
};

// word[0] === word[0].toUpperCase() && word.slice(1) === word.slice(1).toLowerCase()