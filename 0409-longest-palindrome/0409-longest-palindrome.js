/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
      let res={};
    let ans=0;
    for(let val of s){
        if(!res[val]){
                res[val]=1;
        }
        else
             res[val]++;
    if(res[val]%2===0){
        ans+=2;
    }
    }
  return s.length>ans?ans+1:ans;
};