/**
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. 
The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Note: m and n will be at most 100.

Example 1:

Input: m = 2, n = 3
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


/*
  Solution 1
 when m = 3, n = 3
store 1 in n-1 columns, m-1 rows
     null   null   1
     null   null   1
      1      1     1

     6   3   1
     3   2   1
     1   1   1

**/

var uniquePaths = function(m, n) {
    const map = new Array(m).fill().map(x => new Array(n)); 
    console.log(map);
    map[m - 1][n - 1] = 1;
    for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
        if (j === n - 1 || i === m - 1) {
          map[i][j] = 1;
        } else {
          map[i][j] = map[i + 1][j] + map[i][j + 1];
        }
      }
    }
    return map[0][0];
  }; 

  console.log(uniquePaths(3,2))

//solution 2


// solution 3
var uniquePaths = function(m, n, memo = {}) {
    if (memo[m + ',' + n]) {
        return memo[m + ',' + n]
    }
    if (m === 1 || n === 1) {
        return 1
    }
    return (memo[m + ',' + n] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo))
}
