/**
 * example      "00:01:07, 555-555-5555
              00:05:00, 555-555-5555
              00:05:01, 444-444-4444"
              
solution(string) => 900
 */

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    // each line is separated by end of line character \n
    // string is hours:minutes:seconds, then the phone number
    // if the call was less than 5 minutes
        // 3 cents for every second 00:01:07 is 67*3 === 201 cents
    // for 5 minutes even it's 750 cents
        // 5 minutes 1 second - rolls over to 900
    // calls to longest total duration are free
        // if a tie, the phone number with the lowest numberical value that is smallest is free
    
    // need to iterate through the string and determine each individual phone number, cents, duration
    // will need to determine the longest call time to subtract that value from the total
    // return the total amount of cents to be paid
   
    //first split the input string at new line
    const splitString = S.split("\n");
    const cache = {};
    let cents = 0;
    let maxDur = -Infinity;
    let largestPhoneNumber;
    for (let str of splitString) {
      const  phoneNumber =   Number(str.slice(9).replace(/\D/g,''));
      const mins = Number(str.slice(3,5));
      const secs = Number(str.slice(6,8));
        if (!cache[phoneNumber]) {
            cache[phoneNumber] = mins * 60 + secs; 
        } else {
            cache [phoneNumber] += mins* 60 + secs;
        }
    }
    for (let phone in cache) {
        if (cache[phone] > maxDur) {
            maxDur = cache[phone];
            largestPhoneNumber = phone;
        }
        if (cache[phone] === maxDur ) {
            largestPhoneNumber = Number(largestPhoneNumber) > Number(phone)? largestPhoneNumber : phone; 
        }
    }
    delete cache[largestPhoneNumber];
    console.log(cache,"**cache");
    for (let phone in cache) {
        if (cache[phone] < 300) {
            cents += cache[phone] *3;
        }
        else if (cache[phone] % 60 > 0) {
            cents += (Math.ceil(cache[phone]/60)) * 150;
        }
        else if (cache[phone]%60 === 0) {
            cents += cache[phone] * 150;
        }

    }
    return cents;   
}
console.log(solution("00:01:07, 555-555-5555\n00:05:00, 555-555-5555\n00:05:01, 444-444-4444"));

