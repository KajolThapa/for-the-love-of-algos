/**
 * Sample Input: 'aaabcbbba';
 * Sample Output: 'a3bcb3a
 * 
 * Sample Input: 'wwww'
 * Sample Output: 'w4'
 */

function compressedString(str) {
    let newStr = '';
    
    for (let i = 0; i < str.length; i++) {
        let count = 1;
        while(i < str.length - 1 && str[i] === str[i+1]) {
            count++
            i++;
        }
        if (count === 1){
            newStr += str[i]
        } else {
            newStr += str[i] + count;
        }
    }
    return newStr;
}


 console.log(compressedString("aaabcbbba"))