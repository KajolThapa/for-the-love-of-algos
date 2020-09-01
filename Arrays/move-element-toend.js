/**
 * You're given an array of integers and an integer. Write a function that moves all instances of that integer
 * in the arary to the end of the array and returns the array.
 * 
 * The function should perform this in place(i,e, it should mutate the input array) and doesn't need to maintain
 * the order of the other 
 * 
 * Sample Input:  array = [2, 1, 2, 2, 2, 3, 4, 2]
 * toMove = 2;
 * 
 * Sample Output: [1, 3, 4, 2, 2, 2, 2, 2] // the numbers 1, 3, 4 could be ordered differently
 */
//Time 0(n) | Space O(1)
function moveElementToEnd(arr, num) {
   let idx = 0;
   for (const value of arr) {
       if (value !== num) {
           arr[idx] = value;
            idx++;
       }
   }
   for (let i = idx; i < arr.length; i++) {
       arr[i] = num;
   }
   return arr;
}
// console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));

// solution 2
//Time O(n)  | Space O(1)
function moveToEnd(arr, toMove) {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        while (i < j && arr[j] === toMove) {
            console.log('hi')
            j -= 1;
        }
        if (arr[i] === toMove) {
            swap(i, j, arr);
        }
        i += 1;
    }
    return arr;
}

const swap = (i, j, arr) => {
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

console.log(moveToEnd([2, 1, 2, 9, 4, 2, 2, 2], 2))