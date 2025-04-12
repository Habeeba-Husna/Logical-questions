/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length==0) return "";
    let a=strs[0];
    for(let i=1;i<strs.length;i++){
        while(strs[i].indexOf(a)!==0){
            a=a.slice(0,-1)
           if(a==="") return "";
        }
    }
    return a
};
