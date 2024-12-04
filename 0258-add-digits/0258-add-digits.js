/**
 * @param {number} num
 * @return {number}
 */
// var addDigits = function(num) {
//     if(num === 0) return 0
//     return (num-1)%9 +1;
// };


// Digital Root(n)=1+((n−1)mod9)  // formula


var addDigits = function(num) {
    while (num >= 10) { 
        let sum = 0;
        while (num > 0) { 
            sum += num % 10;
            num = Math.floor(num / 10); 
        }
        num = sum;
    }
    return num;
};