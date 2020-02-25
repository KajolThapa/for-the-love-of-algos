
//Time O(nd) | Space O(n)
function numOfWaysToMakeChange(n, denoms) {
    const ways = new Array(n+1).fill(0);
    ways[0] = 1;

    for (const denom of denoms) {
        for (let amount = 1; amount < ways.length; amount++) {
            if (denom <= amount) {
                ways[amount] += ways[amount - denom];
            }
        }
    }
    return ways[n];
}

console.log(numOfWaysToMakeChange(10,[1, 5, 10, 25]));
