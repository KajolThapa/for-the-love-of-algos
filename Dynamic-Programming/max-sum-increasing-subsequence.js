/**
 *      Max Sum Increasing Subsequences
 * 
 * Given an non-empty array of integers, write a function that returns an array of length 2.
 * The first element in the output array should be an integer value representing the greatest
 * sum that can be genrated from a strictly-increasing subsequence in the array.
 * 
 * The second elemnet should be an array of the numbers in that subsequence.
 * A subsequence is defined as a set of numbers that are not necessarily adjacent but that are 
 * in the same order as they appear in the array.
 * 
 * Assume that there will only be one increasing subsequence with the greatest sum.
 * 
 * sample input: [10, 70, 20, 30, 50, 11, 30] sample output: [110, [10, 20, 30, 50]]
 * sample input: [8, 12, 2, 3, 15, 5, 7] sample output: [35, [8, 12,15]]
 * 
 * 
 */

 //Time O(n^2) | Space O(n)
 function maxSumIncreasingSubsequence(array) {
     const sequences = new Array(array.length);
     const sums = array.map(num => num);

     let maxSumIdx = 0;
     for (let i = 0; i < array.length; i++) {
         const currentNum = array[i];
         for (let j = 0; j < i; j++) {
             const otherNum  = array[j];
             if (otherNum < currentNum && sums[j] + currentNum >= sums[i]) {
                 sums[i] = sums[j] + currentNum;
                 sequences[i] = j;
             }
         }
         if (sums[i] >= sums[maxSumIdx]) maxSumIdx = i;
     }
     return [sums[maxSumIdx], buildSequence(array, sequences, maxSumIdx)];
 }

 //helper
 function buildSequence(array, sequences, currentIdx) {
     const sequence = [];
     while (currentIdx !== undefined) {
         sequence.unshift(array[currentIdx]);
         currentIdx = sequences[currentIdx];
     }
     return sequence;
 }

 console.log(maxSumIncreasingSubsequence([8, 12, 2, 3, 15, 5, 7]));
 console.log(maxSumIncreasingSubsequence([10, 70, 20, 30, 50, 11, 30]));