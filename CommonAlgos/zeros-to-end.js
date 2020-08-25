/**
 * Given an array of random numbers, Push all the zero’s of a given array 
 * to the end of the array. For example, if the given arrays is
 *  {1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0}, it should be changed to {1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0}.
 *  The order of all other elements should be same. 
 * Expected time complexity is O(n) and extra space is O(1).
 */


function sortZeros(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== 0) {
        array[count] = array[i];
        count++;
      }
    }
    while (count < array.length) {
      array[count] = 0;
      count++;
    }
    return array;
  }
  console.log(sortZeros([7, 2, 0, 5, 0, 0, 0, 9 ,0]));