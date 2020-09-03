/**
 * Write a  function that takes in an mXn two-dimensional array (that can be square -shaped when m = n) and returns a 
 * one-dimensional array of all the arrays' element in spiral order;
 * 
 * Spiral order starts at the top left corner of the two-dimensional array, goes to the right, and proceeds in a spiral pattern
 * all the way until every element has been visited.
 * 
 * 
 * Sample Input
 *        array = [
 *           [1, 2, 3, 4],
 *           [12, 13, 14, 5],
 *           [11, 16, 15, 6],
 *           [10, 9, 8, 7],
 *        ]
 * 
 * Sample output:  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]             
 *      
 */

 // Time O(N) N is total number of elements
 //Space O(N) 
 function spiralTraverse(arr) {
    const result = [];
    let startRow = 0;
    let endRow = arr.length - 1;
    let startCol = 0;
    let endCol = arr[0].length - 1;

    while(startRow <= endRow && startCol <= endCol) {
        for (let col = startCol; col <= endCol; col++) { //incluse endCol
            result.push(arr[startRow][col]);
        }
        for (let row = startRow + 1; row <= endRow; row++) {
            result.push(arr[row][endCol]);
        }
        for (let col = endCol - 1; col >= startCol; col--) {
            //edge case when there's a single row in the middle of the matrix, we dont want to double count the values
            // if (startRow === endRow) break;
            result.push(arr[endRow][col]);
        }
        for (let row = endRow - 1; row > startRow; row--) {
            //edge case
            // if (startCol === endCol) break;
            result.push(arr[row][startCol])
        }
        startRow++;
        endRow--;
        startCol++;
        endCol--;
    }
    return result;

 }
 const matrix = [
     [1, 2, 3, 4],
     [12, 13, 14, 5],
     [11, 16, 15, 6],
     [10, 9, 8, 7]
 ]

 console.log(spiralTraverse(matrix));