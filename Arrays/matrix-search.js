/**
 * Given an n x n matrix and a number x, find the position of x in the matrix if it is present in it. 
 * Otherwise, print “Not Found”. 
 * 
 * In the given matrix, every row and column is sorted in increasing order.
 */

 function findPosition(matrix, num) {
     let i = 0; 
     let j = matrix.length - 1;
     while (i < matrix.length && j >= 0) {
         console.log(matrix[i][j]);
         if (matrix[i][j] === num) {
             return `Found at position (${i} , ${j})`
         } else if (matrix[i][j] > num) {
             j -= 1;
         } else {
             i += 1;
         }
     }
     return 'not found'
 }

//  const mat = [ [10, 20, 30, 40], 
//                     [15, 25, 35, 45], 
//                     [27, 29, 37, 48], 
//                     [32, 33, 39, 50] ] 
//  console.log(findPosition(mat, 37));