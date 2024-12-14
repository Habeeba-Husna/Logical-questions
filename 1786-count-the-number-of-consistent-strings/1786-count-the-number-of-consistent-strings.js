/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed,words) {
//     let count = words.length;
//   const allowedSet = new Set(allowed);

//   for (const word of words) {
//     for (const char of word) {
//       if (!allowedSet.has(char)) {
//         count--;
//         break;
//       }
//     }
//   }

//   return count;

let count = 0;
    for(let i=0; i<words.length; i++){
        let j=0
        for(j; j<words[i].length; j++){
            if(!allowed.includes(words[i][j])) break;
        }
        if(j==words[i].length) count++;
    }
    return count;
};