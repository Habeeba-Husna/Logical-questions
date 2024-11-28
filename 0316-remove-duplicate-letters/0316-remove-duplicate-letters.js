/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
//     let removed =   s.split("").reduce((acc,curr,index,arr)=>{
// if(!acc.includes(curr)){
//   while(acc.length > 0 && acc[acc.length-1]>curr && arr.indexOf(acc[acc.length-1],index)>index){
//     acc.pop()
//   }
//   acc.push(curr)
// }
// return acc
//     },[]).join("")
// return removed


 let result = '';

	for (let i = 0; i < s.length; i++) {
		const str = s[i];
		if (result.includes(s[i])) continue;

		while (result.length && result.slice(-1) > s[i] && s.includes(result.slice(-1), i)) {
			result = result.slice(0, -1);
		}

		result += s[i]
	}
	return result;
};