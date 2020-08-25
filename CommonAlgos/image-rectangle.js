/*
Imagine we have an image. We'll represent this image as a simple 2D array where every pixel is a 1 or a 0. The image you get is known to have a single rectangle of 0s on a background of 1s.
​
Write a function that takes in the image and returns one of the following representations of the rectangle of 0's: top-left coordinate and bottom-right coordinate OR top-left coordinate, width, and height.
​
image1 = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1],
]
​
Sample output variations (only one is necessary):
​
findRectangle(image1) =>
  x: 3, y: 2, width: 3, height: 2
  2,3 3,5 -- row,column of the top-left and bottom-right corners
​
Other test cases:
​
image2 = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0],
]
​
findRectangle(image2) =>
  x: 6, y: 4, width: 1, height: 1
  4,6 4,6
​
image3 = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 1, 1, 0, 0],
]
​
findRectangle(image3) =>
  x: 5, y: 3, width: 2, height: 2
  3,5 4,6
​
image4 = [
  [0, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
]
​
findRectangle(image4) =>
  x: 0, y: 0, width: 1, height: 1
  0,0 0,0
​
image5 = [
  [0],
]
​
findRectangle(image5) =>
  x: 0, y: 0, width: 1, height: 1
  0,0 0,0
​
n: number of rows in the input image
m: number of columns in the input image
​
*/
​
​
var image1 = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1],
];
​
var image2 = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0],
];
​
var image3 = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 1, 1, 0, 0],
];
​
var image4 = [
  [0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
];
​
var image5 = [
  [0],
];
​
//1- loop through and find the 0 in the matrix
//2 - push those 0 to a result matrix
//3 - save the index of the first 0 pushed
//4 - once all 0 found
//5 - count the result matrix size
​
​
const findRectangle = (image) => {
​
  //image [][]
  let rectIndexes = []
  let colOfFirst =0
  let rowOfFirst = 0
​
  for(let i=0; i<image.length; i++){
    for(let j= 0; j<image[i].length ; j++){
     if(image[i][j] === 0){
       rowOfFirst = j
       colOfFirst = i
       break;
     }
    }
    console.log()
  }
​
   for(let i=0; i<image.length; i++){
    for(let j= 0; j<image[i].length ; j++){
     if(image[i][j] === 0){
       rectIndexes.push([i,j])
​
       //count the 0 on that row and if I exceed the counter of 0 start pushing
​
     }
    }
​
  }
  return ([rectIndexes[0], rectIndexes[rectIndexes.length-1]])
​
}
​
console.log(findRectangle(image3))