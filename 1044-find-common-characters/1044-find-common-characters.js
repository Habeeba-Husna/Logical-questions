/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
   let common = [...words[0]]; 
   console.log(common)
    
    for (let i = 1; i < words.length; i++) {
        let currentWord = words[i].split('');
        console.log(currentWord)
        common = common.filter(char => {
            let index = currentWord.indexOf(char);
            if (index !== -1) {
                currentWord.splice(index, 1);
                return true;
            }
            return false;
        });
        console.log(common)
    }
    
    return common;
};