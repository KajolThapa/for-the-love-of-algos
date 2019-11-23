/**
 * You are climbing a stair case. It takes n stepd to reach to the top. Each time you can either climb 1 or 2 steps. 
 * In how many distinct ways can you climb to the top?
 * 
 * * Example 1:
 * Input : n = 2 //represents total no of steps
 * Explanation: There are two ways to climb to the top:  1 + 1 steps  &   2 steps
 * Output: 2
 * 
 * * Example 2:
 * Input: n = 3
 * Explanation: There are three ways to climb to the top: 1+1+1 steps,  1+2 steps, 2+1 steps
 * Output: 3
 * 
 *  * Example 3 : n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * That is a total of 8 different ways to take 5 steps, given
 * 
 */

 // Brute force 1
 function climbStairs (n) {
     let ways = 0;
     function takeSteps(n) {
         if (n === 0) return ways++;
         if (n < 1) return;
     }
     takeSteps(n);

     return ways++;
 }

 //Brute force 2
 function climbStairs2(n) {
     if (n === 0) return 1;
     if (n < 0) return 0;
     return climbStairs2(n-1) + climbStairs2(n-2);
 }

 //Memoization
 function climbStairs3(n) {
     const cache = {
         0:1,
         1:1,
     };

     function counter(n) {
         if (n === 0) return 1;
         if (n < 0) return 0;

         let n1 = cache[n-1];
         if (!n1) cache[n-1] = n1 = counter(n-1);

         let n2 = cache[n-2];
         if (!n2) cache[n-2] = n2 = counter[n-2];

         return n1 + n2;

     }
     return counter(n)
 }

 const steps = 5;
 console.time('\nclimbStairs\n');
 climbStairs(steps);
 console.timeEnd('\nclimbStairs\n');


 console.time('\nclimbStairs2\n');
 climbStairs2(steps);
 console.timeEnd('\nclimbStairs2\n');

 console.time('\nclimbStairs3\n');
 climbStairs2(steps);
 console.timeEnd('\nclimbStairs3\n');