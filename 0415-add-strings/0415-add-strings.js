/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
// let a=num1.split('')
// let b=num2.split('')
//     if(a.length===b.length){
//          let a=Number(num1)
//     let b=Number(num2)
//     return String(a+b)

//     }else{
//         let d=a.length-b.length
//         console.log(d)
//     }
   
   return (BigInt(num1) + BigInt(num2)).toString();
};