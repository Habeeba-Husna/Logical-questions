/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
     if(s1==s2) return true
    let c=0
    let res=[]
    for(let i=0;i<s1.length;i++){
        if(s1[i]!=s2[i]){
            c++
            res.push(s1[i])
            res.push(s2[i])
        }
    }
    if(c==2){
        if(res[0]==res[3]&&res[1]==res[2]){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
};