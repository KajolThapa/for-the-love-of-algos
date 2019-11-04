
/**
 * Given a string, return true or false if given string is a palindrome.
    Examples:
        (“race car”) should return true
        (“not a palindrome”) should return false
        (“A man, a plan, a canal. Panama”) should return true
        (“never odd or even”) should return true
        (“nope”) should return false
        (“almostomla”) should return false
        (“My age is 0, 0 si ega ym.”) should return true
        (“1 eye for of 1 eye.”) should return false
        (“0_0 (: /-\ :) 0–0”) should return true
 */

function isPalindrome(str) {
    if (str === "") {return false;}
    const regex = [/^A-Za-z0-9/+g];
    const newStr = str.replace(regex,'');
    let leftPointer = 0;
    let rightPointer = string.length - 1;
    while (leftPointer < rightPointer) {
        if (newStr[leftPointer] !== newStr[rightPointer]) {
            return false;
        }
        leftPointer++;
        rightPointer--;
    }
}

export default isPalindrome;