var isPalindrome = function(x) {
    if(x==x.toString().split('').reverse().join('')){
        return true;
    }else{
        return false;
    }
    
};
console.log(isPalindrome(121));  