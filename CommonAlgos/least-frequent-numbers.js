/**
 * Given an array of integers, return an array containing the ineteger that occurs the least numbers
 * of times. If there are multiple answers, return all possibities sorted in ascending order. 
 * Return an empty array when no solution deduced
 */

 const leastFrequent = (array) => {
     const numbersCount = {};
     const rarestNum = [];
     const rarestNumCount = Infinity;

     for (const num of array){
         if (!numbersCount[num]) {
             numbersCount[num] = 1
         } else {
             numbersCount[num] += 1;
         }
     }

     for (const numKey in numbersCount) {
         if (numbersCount[numKey] <= rarestNumCount) {
             rarestNumCount = numbersCount[numKey];
             rarestNum.push(parseInt(numKey));
         } 
     }

     return rarestNum;
 }