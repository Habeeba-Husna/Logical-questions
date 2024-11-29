/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
 if (!digits) return [];
  const alphabet = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  let result = [''];
  for (let digit of digits) {
    const temp = [];
    const letters = alphabet[digit];
    for (let combination of result) {
      for (let letter of letters) {
        temp.push(combination + letter);
      }
    }
    result = temp;
  }

  return result;
}
