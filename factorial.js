// 7 kyu CodeWars //

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of RangeError. //

const factorial = n => {
  // RangeError condition //
  if (n < 0 || n > 12) {
    throw new RangeError('"n" must be a positive num and under 13');
  };
  // Using try catch to handle the RangeError. //
  try {
    // Define a default for res. 1 because multiplication. //
    let res = 1;
    // Looping through numbers 1 - n. //
    for(let i=1; i<=n; i++) {
      // multiply res by i for each loop until i = n. //
      res *= i
    };
    return res
  }
  // Error handling for RangeError. //
  catch(err) {
    if (err instanceof RangeError) {
      return 'error'
    };
  };
};

// Solution I found on Codewars that I liked. //
// I need to learn more about recursive functions. //

// function factorial(n) {
//   if (n < 0 || n > 12)
//     throw new RangeError();
//   if(n <= 1){
//       return 1
//   } else {
//     return n * factorial(n - 1)
//   }
// }
//
// console.log(
//   factorial(5)
// );
