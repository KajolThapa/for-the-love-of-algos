/** 
 * Write a function that takes in the array of subarrays. 
 * Subarrays contain three integers reresenting width, depth and height respectively. Your goal is to stack up the disks and 
 * to maximize the total height of the stack. A disk must have strictly smaller width, depth, and height than any other disk below it.
 * Write a function that returns an array of the disks in the final stack, starting with the top disk and ending with the bottom disk.
 * Note that you cannot rotate disks; in other words, the integres in each subarray must represent [width, depth, height] at all times.
 * Assume that there will only be one stack with the greatest total height.
 * 
 * Sample input: [[2,2,2], [3,2,3], [2,2,8],[2,3,4], [1,3,1], [4,4,5]]
 * Sample output: [[2,1,2], [3,2,3], [4,4,5]]
 * 
 */

 //Time O(n^2) | Space O(n)
 function diskStacking(disks) {
     //sort disks first in ascending order by one dimension(height)
    disks.sort((a,b) => a[2] - b[2]);
     const heights = disks.map(disk => disk[2]);
     const sequences = new Array(disks.length);
     let maxHeightIndex = 0;
     for (let i = 1; i < disks.length; i += 1) {
         const currentDisk = disks[i];
         for (let j = 0; j < i; j += 1) {
             const otherDisk = disks[j];
             //check if all dimensions are strictly less
             if (areValidDimensions(otherDisk, currentDisk)) {
                 if (heights[i] <= currentDisk[2] + heights[j]) {
                     heights[i] = currentDisk[2] + heights[j];
                     sequences[i] = j;
                 }
             }
         }
        if (heights[i] >= heights[maxHeightIndex]) {
            maxHeightIndex = i
        }
     }
     return buildSequence(disks, sequences, maxHeightIndex)
 }


     //helper functions
     function areValidDimensions(o, c) {
         return o[0] < c[0] && o[1] < c[1] && o[2] < c[2];
     }

     function buildSequence(array, sequences, maxIndex) {
         const sequence = [];
         while (maxIndex !== undefined) {
             sequence.unshift(array[maxIndex]);
             maxIndex = sequences[maxIndex];
         }   
         return sequence; 
     }


 

 const inputArray = [[2, 2, 1],[3, 2, 3], [2, 2, 8], [2, 1, 2], [2, 3, 4], [4, 4, 5], ];
 console.log(diskStacking(inputArray));