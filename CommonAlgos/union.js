/*
Construct a function union that takes an input array of arrays, compares each array, 
and returns a new flat array that contains all elements.
If there are duplicate elements,
only add it once to the new array.
Preserve the order of the elements starting from the first element of the first input array. 
*/


function union(arrays) {
    return arrays.reduce(function (acc, cv) {
      return acc.concat(cv.filter(function (el) {
        return acc.indexOf(el) === -1
      }))
    })
  }
  // Uncomment these to check your work!
  const arr1 = [5, 10, 15];
  const arr2 = [15, 88, 1, 5, 7];
  const arr3 = [100, 15, 10, 1, 5];
  console.log(union([arr1, arr2, arr3]));