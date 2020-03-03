/**
 *      Longest Common Subsequence
 * Implement a function that returns the longest subsequence common to two given strings.
 * A subsequence is defined as a group of characters that appear sequentially, with 
 * no importance given to their actual position in the string. In other words, characters 
 * do not need to appear consequetively in order to form a subsequence. Assume that there will be
 * only one longest common subsequence.
 * 
 * sample input: "ZXVVYZW", "XKYKZPW"  sample output: [ 'X', 'Y', 'Z', 'W' ]
 * sample input: "AAAAAABC", "AC"  sample output: ["A", "C"]
 */

 //Solution 1 in Time/Space O(NM * min(N,M))
//  function longestCommonSubsequence(str1, str2) {
//      const lcs = [];
//      for (let i = 0; i < str2.length + 1; i++) {
//          const row = new Array(str1.length + 1).fill([]);
//          lcs.push(row);
//      }
//     //  console.log(lcs);
//      for (let i = 1; i < str2.length + 1; i++) {
//          for (let j = 1; j < str1.length + 1; j++) {
//              if (str2[i-1] === str1[j-1]) {
//                  lcs[i][j] = lcs[i-1][j-1] + str2[i-1];
//              } else  {
//                  lcs[i][j] = lcs [i-1][j].length > lcs[i][j-1].length? lcs[i-1][j] : lcs[i][j-1];
                 
//              }
//          }
//      }
//      return lcs[str2.length][str1.length];
//  }

//Solution 2:  Time O(NM) | Space O(NM)
function longestCommonSubsequence2(str1, str2) {
    const lcs = [];
    for (let i = 0; i < str2.length + 1; i++) {
        const row = [];
        for (let j = 0; j < str1.length + 1; j++) {
            const entry = new Array(4); // store an array of length 4
            entry[1] = 0; // [null, 0, null, null] second element(integer) represents the length of current lcs,
                          // first element will be either null or current letter used
                          //third elemnet will represent previous i index and fourth will represent previous j index 
            row.push(entry);
        }
        lcs.push(row); // [[[null, 0, null, null]]]
    }

    for (let i = 1; i < str2.length + 1; i++) {
        for (let j = 1; j < str1.length + 1;j++ ) {
            if (str2[i-1] === str1[j-1]) {
                lcs[i][j] = [str2[i-1], lcs[i-1][j-1][1] + 1, i - 1, j - 1];
            } else {
                if (lcs[i-1][j][1] > lcs[i][j-1][1]) {
                    lcs[i][j] = [null, lcs[i-1][j][1], i-1, j];
                } else {
                    lcs[i][j] = [null, lcs[i][j-1][1], i, j-1];
                }
            }
        }
    }

    return buildSequence(lcs);
}

//helper
function buildSequence(lcs) {
    const sequence = [];
    let i = lcs.length -1; //final row
    let j = lcs[0].length - 1; //final column
    while ( i !== 0 && j !== 0) {
        let currentEntry = lcs[i][j];
        if (currentEntry[0]) {
            sequence.unshift(currentEntry[0]);
        }
        i = currentEntry[2];
        j = currentEntry[3];
    }
    return sequence;
}

 console.log(longestCommonSubsequence2("ZXVVYZW", "XKYKZPW"));