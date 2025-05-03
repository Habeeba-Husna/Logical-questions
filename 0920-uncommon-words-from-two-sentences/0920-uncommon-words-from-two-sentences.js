/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const words=(s1+" "+s2).split(' ')
    console.log(words)
    let unCommon={};
    for(let word of words){
        unCommon[word]=(unCommon[word]||0)+1;

    }
    return Object.keys(unCommon).filter(word=>unCommon[word]===1)
};