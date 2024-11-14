/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // let binary1=parseInt(a,2)
    // let binary2=parseInt(b,2)
    // let sum=0
    // return sum=(binary1+binary2).toString(2)

    // let result = ""; 
    // let carry = 0;  
    // let i = a.length - 1; 
    // let j = b.length - 1; 
    // while (i >= 0 || j >= 0 || carry > 0) {
    //     const binary1 = i >= 0 ? parseInt(a[i], 10) : 0;
    //     const binary2 = j >= 0 ? parseInt(b[j], 10) : 0;
    //     const sum = binary1 + binary2 + carry;
    //     result = (sum % 2) + result;
    //     carry = Math.floor(sum / 2);
    //     i--;
    //     j--;
    // }

    // return result; 

    // const re = BigInt(`0b${a}`) + BigInt(`0b${b}`); //prefix tells JS the number is binary format
    // return re.toString(2);

    const c=BigInt("0b" + a)+BigInt("0b" + b)
    const d=c.toString(2)
    return d
};
