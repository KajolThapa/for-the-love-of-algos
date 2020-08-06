/**
 *  You're given a non-empty array of positive inetegers where each integer represents 
 *  the maximum number of steps you can take forward in the array.
 *  For example: if the element at index 1 is 3, you can go from index 1 to index to index 2, 3, or 4.
 * 
 *  Write a function that returns the minimum number of jumps needed to reach the final index.
 * 
 *  Note that jumping from index i to index i + x always constitutes one jumo, no matter how large x is.
 * 
 *  Sample Input:  array = [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]
 * 
 *  Sample Output:  4   // 3 --> (4 or 2) --> (2 or 3) --> 7 --> 3
 */ 

 // SOLUTION 1  O(n^2) time  | O(n) space
 function minNumberOfjumps(arr) {
     const jumps = new Array(arr.length).fill(Infinity); //create an array of same length as input with each elements as Infinity
     jumps[0] = 0;

     for (let i = 1; i < arr.length; i +=1) {   //iterate through input array from index 1, and at each index i
         for (let j = 0 ; j < i; j +=1 ) {  // iterate again from 0 up to that index i
            if (arr[j] + j >= i) {   //Is number of jumps we can take at j + j >= i? ifyes, means it brings us either at or farther than index i  // jump is possible
                jumps[i] = Math.min(jumps[i], jumps[j] + 1)
            }
         }
     }
     return jumps[jumps.length - 1]
 }

console.log(minNumberOfjumps([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]))
console.log(minNumberOfjumps([3, 12, 2, 1, 2, 3, 7, 1, 1, 1, 3, 2, 3, 2, 1, 1, 1, 1]))