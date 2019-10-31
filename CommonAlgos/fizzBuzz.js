/** *Challenge: fizzbuzz
Create a function fizzbuzz that takes one number, n. fizzbuzz should loop through the numbers 1 through n and push each number into the results array using the following rules: 
1. Push the string "fizz" in place of numbers divisible by 3. 
2. Push the string "buzz" in place of numbers divisible by 5. 
3. Push the string "fizzbuzz" in place of numbers divisible by both 3 and 5.
*/

const fizzbuzz = (n) => {
  const results = [];
  new Array(n).fill().map((el, index) => {
    let i = index + 1;

    switch (0) {
      case (i % 5) + (i % 3): results.push('fizzbuzz'); break;
      case (i % 5): results.push('buzz'); break;
      case (i % 3): results.push('fizz'); break;
      default: results.push(i);
    }



  })
};

fizzbuzz(16);
console.log(results);