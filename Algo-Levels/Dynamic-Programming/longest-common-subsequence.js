/**
 *      Longest Common Subsequence
 * Implement a function that returns the longest subsequence common to two given strings.
 * A subsequence is defined as a group of characters that appear sequentially, with 
 * no importance given to their actual position in the string. In other words, characters 
 * do not need to appear consequetively in order to form a subsequence. Assume that there will be
 * only one longest common subsequence.
 * 
 * sample input: "ZXVVYZW", "XKYKZPW"  sample output: "XYZW"
 * sample input: "AAAAAABC", "AC"  sample output: "AC"
 */

 //Solution 1 in Time/Space O(NM * min(N,M))
 function longestCommonSubsequence(str1, str2) {
     const lcs = [];
     for (let i = 0; i < str2.length + 1; i++) {
         const row = new Array(str1.length + 1).fill([]);
         lcs.push(row);
     }
     for (let i = 1; i < str2.length + 1; i++) {
         for (let j = 1; j < str1.length + 1; j++) {
             if (str2[i-1] === str1[j-1]) {
                 lcs[i][j] = lcs[i-1][j-1] + str2[i-1];
             } else  {
                 lcs[i][j] = lcs [i-1][j].length > lcs[i][j-1].length? lcs[i-1][j] : lcs[i][j-1];
                 
             }

         }
     }
     return lcs[str2.length][str1.length];
 }

 console.log(longestCommonSubsequence("ZXVVYZW", "XKYKZPW"));