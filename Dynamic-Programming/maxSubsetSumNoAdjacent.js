/**
    Write a function that takes in an array of positive integers 
    and returns an integre representing the maximum sum of non-adjacent elements in the array.
    If sum cannot be generated, the function should return 0;
 
        Sample input [75, 105, 120, 75, 90, 135]
        Sample output 330 (75, 120, 135)
 */

//Time O(n) | Space O(n)

// function maxSubsetSumNoAdjacent(array) {
//     if (array.length === 0) return 0;
//     if (array.length === 1) return array[0];

//     const maxSums = array.slice();
//     maxSums[1] = Math.max(maxSums[0], maxSums[1]);

//     for (let i = 2; i < array.length; i++) {
//         maxSums[i] = Math.max(maxSums[i-1], maxSums[i-2] + array[i]);   
//      }
//      return maxSums[maxSums.length - 1];max-subsetSum-no-adjacent.js

// }


 //Time O(n) | Space O(1)
 function maxSubsetSumNoAdjacent(array) {
     if (array.length === 0) return 0;
     if (array.length === 1) return array[0];

     let second = array[0];
     let first = Math.max(array[0], array[1]);

    for (let i = 2; i < array.length; i++) {
        const current = Math.max(first, second + array[i]);
        second = first;
        first = current;
    }
    return first;
 }

 console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]));