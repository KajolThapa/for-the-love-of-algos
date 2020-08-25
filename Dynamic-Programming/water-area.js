/**
 *      Water Area
 *  Your're given an array of non-negative integers where each non-zero integer
 * represents the height of a pillar of width 1. Imagine water being poured over all of the pillars.
 * Write a function that returns the surface area of the water rapped between the pillars viewed from the front.
 * 
 * Note that spilled water should be ignored.
 * 
 * Sample Input:  arr = [0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]
 * Sample Output:  48
 * 
 * */


 /**
  *  Explanation on approach
  * We have to calculate how much will be contained above each index and find total unit of water collected. which depends on-
  *     1. The height stored at each index- is there a pillar or not at that index??
  *     2. Where is that index? Is it trapped between two bigger pillars left and right. because any amt of water that is excess or spills over the pillar will not be counted.
  * 
  * for example: arr = [0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3].  at index 0, arr[0] is 0, there is no pillar to the left of 0, so any water that comes over that pillar will be washed away.
  * Similarly, at index 1 where arr[1] is 8, there will be a pillar of height 8. there is no pillar to the lft of 8.
  * At index 2 where arr[2] is 0, to the left of it , there is a large pillar of height 8 and there is also a pillar of height 5, 10, 1, 1, 3 on its right. so we know there will some water trapped above it.
  * 
  * Now, can see the pattern how The highest pillar is what matters. That means at any given index in our input array, we have to see where is the tallest pillar to its left and to its right.
  * 
  * again, example: at index 2 where arr[2] = 0 is the currenHeight, leftTallestPillar is of height 8 at & rightTallestPillar is of height 10.
  * We take the minimum height between leftTallest and rightTallest which is 8(minHeight). 
  * Now, to calculate water trapped above it, minHeight - currentHwight ->  8 - 0 = 8.
  * 
  * This held true if currentHeight is less than minHeight.
  * 
  * If currentHeight is greater of equal to minHeight, water trapped will be 0.
  * 
  * 
  */

 // Time O(n)  | Space O(n)
 function waterArea(arr) {
    //Step 1: Build a new array of same length as input array, at each index- store the height of tallest pillar to its left
    const maxes =  new Array(arr.length).fill(0);
    let leftMax = 0;
    for (let i = 0; i < arr.length; i++) {
        const height = arr[i]
        maxes[i] = leftMax;
        leftMax = Math.max(leftMax, height);
    }
    //at this point we have maxes array which has the tallest left pillar stored at each index [0,  0,  8,  8,  8,  8, 8,  8, 10, 10, 10, 10, 10, 10]

     //Step2: Build a new array of same length as input array, at each index-store the height of tallest pillar to its right
    let rightMax = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        const height = arr[i];
         //To calculate the water obtained above each index, we have to take the smallest of two pillars(left,right)
        const minHeight = Math.min(rightMax, maxes[i]);
        if (height < minHeight) { //at given index, if currentHeight is less than minHeight,
            maxes[i] = minHeight - height; // the water that can be stored at that index will be calculated
        } else {
            maxes[i] = 0; //if currentHeight is lessorequal to minHeight of two pillars, water will slip waya
        } 
        rightMax = Math.max(rightMax, height)
    }

    return maxes.reduce((curr, acc) => curr + acc); //

  }

//  console.log(waterArea([0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]));

