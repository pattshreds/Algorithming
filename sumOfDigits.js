// 7kyu

// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.



const sumDigits = (number) => {
    // turn any negative numbers into positive numbers.
    number < 0 ? number = Math.abs(number) : null;
        //Define a term that splits the number into an array of individual strings.
        let numArr = number.toString().split('');
        // Define a value to contain the solution.
        let total = 0;
            // Loop through the array numArr returns and adding each digit to the next until the sum is in the total variable.
          for (let i = 0; i < numArr.length; i++) {
            let num = numArr[i];
            total += numArr[i]++
          }
        return total;
  }

// Call the function using -267834 as the parameter "number".
// Expected output: 30

console.log(
    sumDigits(-267834)
)