/**
    Kadanes Algorithm
 
    Write a function that takes in non-empty array of integers and returns the maximum sum that can be
    obtained by summing up all the numbers in a non-empty subarrays of the input array.
    A subarray must only contain adjacent numbers

 * */
// O(n) Time and O(1) space
 function kadanesAlgorithm(array) {
     let maxEndingHere = array[0];
     let maxSoFar = array[0];

     for (let i = 1; i < array.length; i +=1) {
         const num = array[i];
         maxEndingHere = Math.max(num, num + maxEndingHere);
         maxSoFar = Math.max(maxSoFar, maxEndingHere);
     }
     return maxSoFar;
 }

 const arr = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];
 console.log(kadanesAlgorithm(arr));
