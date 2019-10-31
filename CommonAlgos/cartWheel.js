/** ==========================   9    ========================== 
 define a function ‘cartwheel’ that takes an array A and a number N,
 and returns a new array made of N repetitions of array A 
ex: cartwheel([1,2,3], 2) // => [1,2,3,1,2,3]

**/ 
function cartWheel (arr, N){
    const cycle = [];
    while(N--) {
      cycle.push(...arr);
    }
    return cycle;
    
  //  let count = 0;
  //  const result  = [];
  //  while (count < N){
  //     result.push(...arr)
  //     count += 1;
  //  }
  //  return result;
  }
  //console.log(cartWheel([1,2,3], 3))