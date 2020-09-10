/**
 * Write a function, makeChange, that returns an integer 
 * that represents the least number of coins that add upto an amount where the amount is 
 * always divisible by 5.
 * 
 * coin value: 5, 10, 25
 */

 // <============ BRUTE FORCE  ===== >
const coins = [5,10, 25];
const makeChange = ((coins, amount) => {
    if (amount === 0) { return 0;}    //base case
    let minCoins = 0;
    coins.forEach((coin, i) => {
        if (amount - coin >= 0) {
            let currMinCoins = makeChange(coins,amount - coin);
            if (minCoins === undefined || currMinCoins < minCoins) {
                minCoins = currMinCoins;
            }

        }
    });
    return minCoins + 1;
})

console.log(makeChange([5,10, 25], 17));