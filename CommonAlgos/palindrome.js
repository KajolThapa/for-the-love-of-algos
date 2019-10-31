//Write a JavaScript function that checks whether a passed string is palindrome or not? 
// madam => madam    //true
//nurses run=>       //true

function palindrome(str) {
    let newStr = str.replace(/[^a-zA-Z0-9]+/g, '');
    for (let i = 0; i < newStr.length; i += 1) {
        if (newStr[i] !== newStr[newStr.length - (i+1)]) {
            return false;
        }
    }
    return true;   
}
 /**
   * ========= Palindrome with two input strings;
   */
 function palindrome2(s1, s2) {
     const newS1 = s1.toLowerCase().replace(/[^A-Za-z0-9]+/g,'');
     const newS2 = s2.toLowerCase().replace(/[A-Za-z0-9]+/g,'');
     for (let i = 0; i < newS1.length; i+=1){
        for (let j = newS2.length - 1 ; j >= 0; j-=1){
            if (newS2[j] !== newS1[i]) return false;
        }
    }
    return true; 
 }
 console.log(palindrome2('madam', 'MADAM'))