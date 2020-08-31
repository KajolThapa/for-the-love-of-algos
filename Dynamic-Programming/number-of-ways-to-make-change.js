/**
 * 

​
Given an array of positive integers representing coin denominations and a 
single non-negative integer representing a target amount of money, 
implement a function that returns the smallest number of coins needed
to make change for that target amount using the given coin denominations.
 
Note that an unlimited amount of coins is at your disposal. If it is impossible to make change for the target amount, return -1.
​
Sample input: 7, [1, 5, 10]
Sample output: 3 (2x1 + 1x5)
​
 */
//Time O(nd) | Space O(n)
function numOfWaysToMakeChange(n, denoms) {
    const ways = new Array(n+1).fill(0);
    ways[0] = 1;

    for (const denom of denoms) {
        for (let amount = 1; amount < n + 1; amount++) {
            if (denom <= amount) {
                ways[amount] += ways[amount - denom];
            }
        }
    }
    return ways[n];
}

console.log(numOfWaysToMakeChange(6,[1, 5]));
