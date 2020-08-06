/**
 * Max Subset Sum No Adjacent
 * 
 * Write a function that takes in an array of positive integers and 
 * returns the maximum sum of non-adjacent elements in the array
 * 
 * If a sum can't be generated, the function should return 0.
 * 
 * Sample Input:  array = [75, 105, 120, 75, 90, 135]
 * 
 * Sample Output:  330 // 75 + 120 + 135
 */

 //SOLUTION 1
 // O(n) time | O(n) space

 function maxSubsetSumNoAdjacent(arr) {
     if (arr.length === 0) return 0;
     if (arr.length === 1) return arr[0];
     const maxSums = [...arr];  // create a new array of same length as input array
     maxSums[1] = Math.max(maxSums[0], maxSums[1])
    //  console.log(maxSums)
     for (let i = 2; i < arr.length; i += 1) {
         maxSums[i] = Math.max(maxSums[i-1], maxSums[i-2] + arr[i])
     }
     return maxSums[maxSums.length - 1]
 }

//  console.log(maxSubsetSumNoAdjacent([7, 10, 12, 7, 9, 14]))
//  console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]))

 //solution 2
 // O(n) time | O(1) space
 function maxSubsetSumNoAdjacent2(arr) {
    if (arr.length === 0) return 0;
    if (arr.length === 1) return arr[0];

    let second = arr[0];
    let first = Math.max(second, arr[1]);

    for (let i = 2; i < arr.length; i++) {
        const current = Math.max(first, second + arr[i]);
        second = first;
        first = current;
    }
    return first;
 }

 console.log(maxSubsetSumNoAdjacent2([7, 10, 12, 7, 9, 14]))
 console.log(maxSubsetSumNoAdjacent2([75, 105, 120, 75, 90, 135]))
