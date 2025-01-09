/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let res = [];
    const helper = (n) => {
    if(n==1 || n==2){
       return n;
   }
   if(res[n]) {
       return res[n];
   }
   res[n] = helper(n-1) + helper(n-2);
   return res[n]; 
    }
    return helper(n)
}
