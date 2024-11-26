/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
//     let res=[]
   
//     for(let i=0;i<arr1.length;i++){
//         if(arr1.includes(!arr2[i])){
//             res.push(arr2[i])    
//         }
//     }
// arr1.sort((a,b)=>a-b)
//     return res.concat(arr1)

    let res= 0;
    for (let i = 0; i <arr2.length; i++) {
        for (let j = res; j <arr1.length; j++) {
            if (arr1[j] === arr2[i]) {
                [arr1[res], arr1[j]] = [arr1[j], arr1[res]];
                res++;
            }
        }
    }
    arr1 = [...arr1.slice(0, res), ...arr1.slice(res).sort((a, b) => a - b)];
    return arr1;
};
 