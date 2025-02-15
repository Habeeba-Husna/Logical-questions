/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    let a=[];
    for(let i=0;i<grid.length;i++){
        grid[i] = grid[i].sort((a, b) => b - a) 
    }
    let sum=0;
    let count=grid[0].length
    for (let k = 0; k < count; k++) {
        let arr=[]
        for(let i=0;i<grid.length;i++){
            arr.push(grid[i][0])
            grid[i].shift()
        }
        sum+=Math.max(...arr)
    }
    return sum
};