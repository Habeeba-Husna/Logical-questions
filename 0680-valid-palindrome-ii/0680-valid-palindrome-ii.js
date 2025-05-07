/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    function isPalindrome(str) {
        let i = 0, j = str.length - 1;
        while (i < j) {
            if (str[i] !== str[j]) return false;
            i++;
            j--;
        }
        return true;
    }
    let i = 0, j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) {
            let skipLeft = s.slice(i + 1, j + 1); // remove s[i]
            let skipRight = s.slice(i, j);       // remove s[j]
            return isPalindrome(skipLeft) || isPalindrome(skipRight);
        }
        i++;
        j--;
    }

    return true;
};
