/**
 * Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
 * A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear 
 * in the array. For instance, the numbers [1, 3, 4] and [2,4] form a subsequences of the array [1, 2, 3, 4].
 * 
 * Note that a single number in the array and the array itself are both valid subsequences of the array.
 * 
 * Sample Input:  array = [5, 1, 22, 25, 6, -1, 8, 10] sequence= [1, 6, -1, 10]
 * Sample Output: true 
 */

 //Time  O(n)   |  Space O(1)
 function isValidSubsequence(array, sequence) {
     let seqIndex = 0;
     for (const num of array) {
         if (seqIndex === sequence.length) return;
         if (sequence[seqIndex] === num) seqIndex++;
     } 
     return seqIndex === sequence.length;
 }

 //using while loop
 function validateSequence(array, sequence) {
     let seqIndex = 0;
     let arrIndex = 0;
     while (seqIndex < sequence.length) {
         if (array[arrIndex] === sequence[seqIndex]) {
             seqIndex++;
             arrIndex++;
         }
     }
     return seqIndex === sequence.length;
 }
 
//  console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))
