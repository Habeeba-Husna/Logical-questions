/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map=new Map
    console.log(map)
        for(let b of strs){
            // console.log(b)
            let sorted = b.split('').sort().join('');
            console.log(sorted)
            if (!map.has(sorted)) {
        map.set(sorted, []);
    }
    map.get(sorted).push(b);
}
    return Array.from(map.values());
};