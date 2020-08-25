/*

We will define N-bonacci series as a sequence where the first N elements are
equal to 1, and each next element is a sum of N previous. For example, with N=2
N-bonacci sequence is 1,1,2,3,5,8... (This particular case is known as Fibonacci
sequence).

PROBLEM: implement function int nbon(int n, int m), which returns M-th
element of N-bonacci series.

N=3: 1,1,1,3,5,9,17...

nbon(3,4) = 5
nbon(3,2) = 1

N=2: 1,1,2,3,5,8,13...

nbon(2,0) = 1
nbon(2,5) = 8

*/

 // nbon(4, 3) 
 // N = 4: 1,1,1,1,4,7,13

 const nbon = (n, m) => {
    // start sequence with n amount of 1s
    let seq = [];
    for (let i = 0; i < n; i++){
        seq.push(1)
    }
    // once I have the 1s i begin summing the last n numbers to make the next number
    if (m >= n) {
        for (let i = n; i <= m; i++) {
          let sum = 0;
          let last = seq.length - 1;
          let temp = n;
          while (temp > 0) {
            sum += seq[last];
            if (temp === 1) {
              seq.push(sum);
            }
            last--;
            temp--;
          }
        }
      }
    // return number at index m
    return seq[m];
   };