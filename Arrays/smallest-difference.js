/**
 * Write a function that takes in two non-empty arrays of integers, finds the pair of numbers(one from each array)
 * whose absolute difference is closet to zero, and returns containing these two numbers, with the number from 
 * the first array in first position.
 * Assume that there will be only one pair of numbers with the smallest difference.
 * 
 * Sample Input: array1 = [-1, 5, 10, 20, 28, 3]  array2 = [26, 134, 135, 15, 17]
 * Sample Output = [28, 26]
 */

 //Time O(nlog(n) + mlog(m))    |    Space O(1)
 function smallestDifference(array1, array2) {
     array1.sort((a,b) => a - b);
     array2.sort((a, b) => a - b);
     let idx1 = 0;
     let idx2 = 0;
     let smallest = Infinity;
     let current = Infinity;
     let smallestPair = [];
     while(idx1 < array1.length && idx2 < array2.length) {
         let firstNum = array1[idx1];
         let secondNum = array2[idx2];
         current =  Math.abs(firstNum - secondNum);
         if (firstNum < secondNum) {
             idx1++;
         } else if (secondNum < firstNum) {
             idx2++;
         } else {
             return [firstNum, secondNum];
         }
         if (current < smallest) {
             smallest = current;
             smallestPair = [firstNum, secondNum]
         }
        }
        return smallestPair;
 }

 console.log(smallestDifference([-1, 5, 10, 20, 28, 3],[26, 134, 135, 15, 17]))