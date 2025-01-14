/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
    let digits = number.replace(/[-\s]/g, "");
    let newArr = [];
    while (digits.length > 4) {
        newArr.push(digits.slice(0, 3));
        digits = digits.slice(3);
    }
    if (digits.length === 4) newArr.push(digits.slice(0, 2), digits.slice(2));
    else newArr.push(digits);
    return newArr.join("-");
};