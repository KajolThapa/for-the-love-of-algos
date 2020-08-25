/*
 * Complete the 'rollTheString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY roll
 */

function rollTheString(s, roll) {
    // Write your code here
    // declare variable to keep track of rolls
    let rolls = roll.length;
    // declare variable to keep track of which roll
    let currRoll = 0;
    // split s string into array for iteration
    let sArr = s.split('');
    // while we have rolls, operate based on roll[i]
    while (rolls > 0) {
        let charCode = 0;
        for (let i = 0; i < roll[currRoll]; i++) {
            charCode = (sArr[i].charCodeAt() + 1);
            if (charCode === 123) {
                charCode = 97;
            }
            sArr[i] = String.fromCharCode(charCode);
        }
        rolls--;
        currRoll++;
    }
    
    return sArr.join('');
}

let str = 'wxyz';
let arr = [1, 2, 3, 4];
console.log(rollTheString(str, arr)); // 'aaaa'