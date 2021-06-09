// 8kyu

// multiply all items in an array of numbers and return the sum.

const grow = (x) => {
  // Define sum. Since we're mutiplying, use 1 so as to not return 0.
  let sum = 1;
  // Loop through the array
  for (let i=0; i < x.length; i++) {
    // Do the maths. Sum equals sum times each element.
    sum *= x[i]
  }
  // Out of the loop, return the total value of Sum.
  return sum
};

// Call the function using [1,2,3,4] as the parameter x
// Expected output: 24

console.log(
  grow([1,2,3,4])
);
