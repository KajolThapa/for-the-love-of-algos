/**
 * Write a  function that takes in a non-empty array of disntinct integers and an integer representing a target sum. If any two numbers in the input array sum up to
 * the target sum, the funcyion should return them in an array, in sorted. If no two numbers
 * sum up to the target sum, the function should return an empty array. Assume that there will be at most one pair of numbers summing 
 * up to the target sum.
 */

 // ===== Solution 1
    //  0(n^2) time | 0(1) space

function twoNumberSum(array, targetSum) {
    for (let i = 0; i < array.length; i += 1) {
        const firstNum = array[i];
        for (let j = i + 1; array.length; j += 1) {
            const secondSum = array[j];
            if (firstNum + secondSum === targetSum) {
                return [firstNum, secondSum].sort((a,b) => a-b);
            }
        }
     }
     return [];
}




// ===== Solution 2
    //  0(n) time | 0(n) space



// ===== Solution 3
    //  0(n) time | 0(1) space

console.log(twoNumberSum([3,5,-4,8,11,1,-1,6], 10));