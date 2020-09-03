//Time O(nd)  | Space O(n)
function numOfWaysToMakeChange(n, denoms) {
    const numOfCoins = new Array(n+1).fill(Infinity);
    numOfCoins[0] = 0;

    for (const denom of denoms) {
        for (let amount = 0; amount < numOfCoins.length; amount++) {
            if (denom <= amount) {
                numOfCoins[amount] = Math.min(numOfCoins[amount], 1 + numOfCoins [amount - denom])
            }
        } 
    }
    return numOfCoins[n] !== Infinity ? numOfCoins [n] : -1;
}
console.log(numOfWaysToMakeChange(9,[1, 2, 4]));