/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    //   prices.sort((a,b)=>a-b);
    // let sum=prices[0]+prices[1];
    // if(sum<=money){
    //     return money-sum;
    // }else{
    //     return money;
    // }

    let a=prices.sort((a,b)=>a-b);
    let sum=prices[0]+prices[1];
    return (money-sum)>=0?(money-sum):money;
};