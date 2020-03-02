/**
 *              Levenshtein Distance
 * 
 * Write a function that takes in two strings and returns the minimum number of 
 * edit operations that need to be performed on the first string to obtain the 
 * second string.
 * 
 * There are three edit operations :  insertion of a character
 *                                 :  deletion of a character
 *                                 : subsitution of a character
 * 
 * Sample input:  "abc", "yabd"
 * sample output: 2 (insert "y", substitute "c" for "d")
 * 
 */

 //Time O(NM) | Space  O(NM) // N is length of str1 and M is length of str2

 function levenshteinDistance(str1, str2) {
     const edits = [];
     for (let i = 0; i < str2.length+1; i++) {
         const row = [];
        //  console.log(row, "check first");
         for (let j = 0; j < str1.length+1; j++) {
             row.push(j)
            //  console.log(row, "inside inner loop")
         }
         row[0] = i;
         edits.push(row);
        //  console.log(row, 'r');
        //  console.log(edits,'e');
     }

     for (let i = 1; i < str2.length + 1; i++) {
         for (let j = 1; j < str1.length + 1; j++) {
             if (str2[i-1] === str1[j-1] ){
                 edits[i][j] = edits[i-1][j-1];
             } else {
                 edits[i][j] = 1 + Math.min(edits[i-1][j-1], edits[i][j-1], edits[i-1][j])
             }
         }
     }
     return edits[str2.length][str1.length];
 }

 console.log(levenshteinDistance("abc",  "yabd"));