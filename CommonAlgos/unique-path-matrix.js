/**
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. 
The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Note: m and n will be at most 100.

Example 1:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
Example 2:

Input: m = 7, n = 3
Output: 28
 */


//  Solution 1

//  var uniquePaths = function(m, n) {
//     const matrix = Array
//         .from({ length: n + 1 })
//         .map(() => Array.from({ length: m + 1 }).fill(0));

//     matrix[0][0] = 1;

//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= m; j++) {
//             const up = matrix[i - 1][j];
//             const left = matrix[i][j - 1];
//             const diagonal = matrix[i - 1][j - 1];

//             matrix[i][j] = Math.max(
//                 up + left,
//                 up + diagonal,
//                 left + diagonal,
//             );
//         }
//     }

//     return matrix[n][m];
// };

//solution 2
var uniquePaths = function(m, n, memo = {}) {
    if (memo[m + ',' + n]) {
        return memo[m + ',' + n]
    }
    if (m === 1 || n === 1) {
        return 1
    }
    return (memo[m + ',' + n] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo))
}

//solution 3
// var uniquePaths = function(m, n) {
//     const map = new Array(m).fill().map(x => new Array(n)); 
//     console.log(map);
//     map[m - 1][n - 1] = 1;
//     for (let i = m - 1; i >= 0; i--) {
//       for (let j = n - 1; j >= 0; j--) {
//         if (j === n - 1 || i === m - 1) {
//           map[i][j] = 1;
//         } else {
//           map[i][j] = map[i + 1][j] + map[i][j + 1];
//         }
//       }
//     }
//     return map[0][0];
//   }; 

  console.log(uniquePaths(3,2))