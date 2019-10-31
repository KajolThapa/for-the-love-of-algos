
// Define a function "fastCache" that takes one argument, a function, and (when called) returns a function. 
// When invoked, fastCache creates a cache that tracks calls to the newly created returned function (inside of which our input function is being called)
// where each input is associated with its output. 

// Every subsequent call to that 
// returned function with the same argument will return the output directly from the 
// cache, instead of invoking the original function again.

function fastCache (inputFunction){

    const storeOfCalls = {};
  
      function inner (input){
      // if input is already in cache grab output from cache and return it
      if(storeOfCalls[input]){
        console.log("Taking from cache")
        console.log(storeOfCalls)
        return storeOfCalls[input]
      }
      // else if not run multiplyBy2 (that is, inputFunction) on `input`
      // store input + output of multuplyBy2 for future in the cache
      storeOfCalls[input] = inputFunction(input) // multiplyBy2(3)
      // return out output of mulitopbyBy2 call
      console.log("Adding to cache")
      return storeOfCalls[input]
    }
    return inner
  }
  
  
  function multiplyBy2 (num){
    return num*2;
  }
  
  const multiplyBy2WithCache = fastCache(multiplyBy2)
  
  console.log(multiplyBy2WithCache(3)) // 6 (original work)
  console.log(multiplyBy2WithCache(3)) // 6 (from a 'cache')
  
  console.log(multiplyBy2WithCache(10)) // 6 (original work)
  console.log(multiplyBy2WithCache(10)) // 6 (from a 'cache')