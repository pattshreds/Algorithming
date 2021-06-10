// 7 kyu

// Write a function named sumDigits which takes a number as input    and returns the sum of the absolute value of each of the number's decimal digits.


function sumDigits(number) {
  // set the absolutle value of number to a variable.
  let math = Math.abs(number)
  // convert number to string, split to an array, map to transform into number, add together.
  let num = math.toString().split('').map(Number).reduce((a,b) => a+b);
  return num
}

// Call function with numbers parameter.
console.log(
  sumDigits(-82)
);
