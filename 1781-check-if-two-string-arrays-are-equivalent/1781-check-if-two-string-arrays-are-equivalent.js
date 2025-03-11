/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let arr=word1.join('')
    let arr1=word2.join('')
    for(let i=0;i<arr.length;i++){
         if(arr===arr1){
            return true
         }else{
            return false
         }
    }
   
};