/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I


 */
 
 //Time O(n)  and Space O(n)
const zigzagPattern = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }

    const rows = [];
    for (let i = 0; i < numRows; i++) {
        rows[i] = '';
    }
    console.log(rows);
    
    let row = 0;
    let direction = -1;
    for (let i = 0; i < s.length; i++) {
        rows[row] += s[i];
        if (row === 0 || row === numRows - 1) {
            direction *= -1;
        }
        row += direction;
    }
    
    return rows.join('');
};
//  console.log(zigzagpattern('PAYPALISHIRING', 3) )