/*
 * You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */
function rotateGrid(matrix, n) {
    if (matrix.length < n || matrix.length > n) return undefined;
  
    // notice the pattern that essentially grabbing one individual column at a time 
    return matrix.reduce((acc, row, i)=>{
      // grab needed columns and push into acc array
      // [7,4,1] ... [8,5,2]
      acc.push(row.map((val, j) => matrix[n - (1 + j)][i]))
      return acc
    },[])
  }