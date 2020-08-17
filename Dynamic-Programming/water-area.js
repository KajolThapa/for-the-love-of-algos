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

