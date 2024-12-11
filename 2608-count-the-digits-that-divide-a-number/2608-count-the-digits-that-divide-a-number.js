/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    
    let count=0;
    let a=num.toString().split('').map(Number)
    console.log(a)
    for(let i=0;i<a.length;i++){
        if (a[i] !== 0 && num % a[i] === 0) {
        // if(num%a[i]==0){
            count++

        }
        
    }
    return count
};