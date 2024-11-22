/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let a=0;
    let b=[0]
    for(let i=0;i<gain.length;i++){
        a+=gain[i]     
        b.push(a)
    }
return Math.max(...b) 
};