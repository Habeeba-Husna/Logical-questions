/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five=0
    let ten=0
    for(let i of bills){
        if(i===5)
            five+=1
        else if(i===10){
            ten+=1
            five-=1
        }
        else{
            if(ten!=0){
                ten-=1
                five-=1
            } else 
                five-=3
        }
        if(five<0 || ten<0) return false
    }
    return true;
};