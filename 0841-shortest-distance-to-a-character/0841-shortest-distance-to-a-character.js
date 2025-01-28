/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
      let str=[]
    let result=[]
    for(let i=0;i<s.length;i++){
        if(s[i]==c) str.push(i)
    }
    for(let i=0;i<s.length;i++){
        let t=s.length
        for(let x of str) t=Math.min(Math.abs(i-x),t);
        result.push(t)
    }
    return result
};