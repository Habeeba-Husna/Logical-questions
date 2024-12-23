/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let bulls = 0;
    let cows = 0;
    const secretCount = new Array(10).fill(0);
    console.log(secretCount)
    const guessCount = new Array(10).fill(0);
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            bulls++;
        } else {
           secretCount[secret[i]]++;
           guessCount[guess[i]]++; 
        }
    }
    for (let i = 0; i < 10; i++) {
        cows += Math.min(secretCount[i], guessCount[i]);
        console.log(cows)
    }
    return `${bulls}A${cows}B`;
};