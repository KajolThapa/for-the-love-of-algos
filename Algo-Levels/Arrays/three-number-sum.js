// Time O(n^2)  |  Space O(n)
function threeNumberSum(array, targetSum) {
    array.sort((a,b) => a-b);
    const triplets = [];
    for (let i = 0; i < array.length-2; i +=1) {
            let leftPointer = i + 1;
            let rightPointer = array.length - 1;
            let currentNum = array[i];
            while (leftPointer < rightPointer) {
                const currentSum = currentNum + array[leftPointer] + array[rightPointer];
                if (currentSum === targetSum) {
                    triplets.push([currentNum, array[leftPointer], array[rightPointer]]);
                    leftPointer += 1;
                    rightPointer -= 1;
                } else if (currentSum < targetSum) {
                    leftPointer += 1;
                } else if (currentSum > targetSum) {
                    rightPointer -= 1;
                }

            }
    }
    return triplets;
}

console.log(threeNumberSum([12,3,1,2,-6,5,-8,6], 0));