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

// console.log(minNumberOfjumps([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]))
// console.log(minNumberOfjumps([3, 12, 2, 1, 2, 3, 7, 1, 1, 1, 3, 2, 3, 2, 1, 1, 1, 1]))


// SOLUTION 2:  O(n) time | O(1) space
function minNumberOfjumps2(array) {
    //Explanation: At each index, we know what our max reach is and how many steps we can take
    // At index 0 - maxReah = 3, steps = 3 // 3 steps until we've to take a jump. That means we can either go to 4, 2, or 1 in this example
    // and it's only when we reach to 1 at index 3, that we know we have to take a jump

    //At index 1 - maxReach = 4 + 1

    if (array.length === 1) return 0;
    let jumps = 0;
    let steps = array[0];
    let maxReach = array[0];

    for (let i = 1; i < array.length - 1; i++) {
        maxReach = Math.max(maxReach, array[i] + i); // at each index, update the farthest place in the array we can reach
        steps -= 1; //while we consume a step

 //check if we run out of steps?that means we must have jumped somewhere, when steps reaches 0, we have to take  a jump
        if (steps === 0) {
            jumps += 1;
// to get from where we're at TO maxReach, which we know we can reach, how many steps do we've to take?  
             steps = maxReach - i; //when at index 3, to reach to current maxReach at index 5??
        }
    }

    //here we've iterated all the way to the length-2, so once we reach the final value of array, we return jumps + 1
    return jumps + 1;

}
console.log(minNumberOfjumps2([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]))