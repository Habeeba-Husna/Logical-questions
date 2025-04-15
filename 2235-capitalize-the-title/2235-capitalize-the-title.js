/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
//     return title
//     .split(' ')
//    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//    .join(' ')
 
 let words=title.toLowerCase().split(" ")
// console.log(words)
    let result=words.map((word)=>{
        if(word.length<=2){
            return word;
        }else{
            return word.charAt(0).toUpperCase()+word.slice(1)
        }
        })
        return result.join(' ')
};
