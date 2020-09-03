/**
 * Write a function that takes in a array of integers and returns a boolean representing whether the array is monotonic.
 * An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decsreasing.
 * 
 * Note that empty arraya and arrays of one element are monotonic.
 * 
 * Sample Input: [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
 * Sanple Output: true -1100 and -1100 are non-increasing
 */

 //Time O(n)  | Spcae O(1)
function isMonotonic(arr) {
    //eliminate one aspect of problem// check only if array is entirely non-decreasing or non-increasing
    let isNonDecreasing = true;
    let isNonIncreasing = true;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i-1]) isNonDecreasing = false;
        if (arr[i] > arr[i-1]) isNonIncreasing = false;
    }
    return isNonIncreasing || isNonDecreasing;
}