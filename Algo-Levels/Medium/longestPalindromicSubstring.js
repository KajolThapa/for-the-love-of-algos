const isPalindrome = require('../../CommonAlgos/isPalindrome');

function longestPalindromicString(string) {
    let longest = '';
    for (let i = 0; i < string.length; i++) {
        for (let j = i; j <string.length; j++) {
            const subStr = string.slice(i, j+1);
            if (subStr.length > longest.length && isPalindrome(subStr)) {
                longest = subStr;
            }

        }
    }
    return longest;
}
console.log(longestPalindromicString('abaxyzzyxf'));