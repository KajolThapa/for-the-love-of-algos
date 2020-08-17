/**
 * Write a function that takes in an array of integers and returns 
 * a sorted version of that array using the Quick Sort Algorithm
 */

//Time At worst- O(n^2)  | At best and average O(n log(n))
//Space O(n log(n))

 function quickSort(array) {
     quickSortHelper(array, 0, array.length-1);
     return array;
 }

 function quickSortHelper(array, startIdx, endIdx) {
     if (endIdx <= startIdx) {return;}

    const pivot = startIdx;
    let leftPointer = startIdx + 1;
    let rightPointer = endIdx; 

    while (rightPointer >= leftPointer) {
        if (array[leftPointer] > array[pivot] && array[rightPointer] < array[pivot]) {
            swap(leftPointer, rightPointer, array);
        }
        if (array[leftPointer] <= array[pivot]) {leftPointer += 1;}
        if (array[rightPointer] >= array[pivot]) {rightPointer -= 1};
    }
    swap(pivot, rightPointer, array);
    const leftSubArrayIsSmaller = rightPointer - 1 - startIdx < endIdx - (rightPointer + 1);
    if (leftSubArrayIsSmaller) {
        quickSortHelper(array, startIdx, rightPointer - 1);
        quickSortHelper(array, rightPointer + 1, endIdx);
    }
    else {
        quickSortHelper(array, rightPointer + 1, endIdx);
        quickSortHelper(array, startIdx, rightPointer - 1); 
    }
 }

 function swap(i, j, array) {
     let temp = array[j];
     array[j] =  array[i];
     array[i] = temp;
 }


