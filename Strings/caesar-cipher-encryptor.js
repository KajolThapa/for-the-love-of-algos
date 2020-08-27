/**
 * Given a non-empty string of lowercase letters and a non-negative integer representing a key, 
 * write a function that returns a new string obtained by shifting every letter in the input
 * string by k positions in the alphabet, where k is the key.
 * 
 * Sample Input: string ="xyz" , key = 2
 * Sample output: "zab"
 */
// O(n) Time | O(n) space
 function caesarCipherEncryptor(str, key) {
        //UTf-16 code for "a" is 97
        //UTF-16 code for "z" is 122
        const output = [];
        const newkey = key % 26; // if key is a large number- 54 (26 +26 +2 )  is same as when key is 2

        for (const letter of str) {
            output.push(getNewLetter(letter, newkey))
        }
        return output.join('');
 }

 function getNewLetter(letter, key) {
     const newUtfCode = letter.charCodeAt() + key;
     return newUtfCode <= 122 ? String.fromCharCode(newUtfCode) : String.fromCharCode(96 + (newUtfCode % 122));
 }
 
 console.log(caesarCipherEncryptor("xcyz", 2));