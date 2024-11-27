/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
      let left=0;
      maxLength=0;
      let charSet=new Set();
       for(let right=0;right<s.length;right++){
         while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
       }
       return maxLength

    //  let left = 0; 
    // let right = 0;  
    // let maxLength = 0;  
    // const charSet = new Set();  

    // while (right < s.length) {
    //     if (!charSet.has( s[right])) {
    //         charSet.add( s[right]);
    //         maxLength = Math.max(maxLength, charSet.size)
    //         right += 1;
    //     } else {
    //         charSet.delete(s[left]);
    //         left += 1;
    //     }
    // }
    
    // return maxLength;
};