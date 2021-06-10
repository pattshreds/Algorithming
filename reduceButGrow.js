// 8kyu

// multiply all items in an array of numbers and return the product.

const grow = (x) => {
  // Define product. Since we're mutiplying, use 1 so as to not return 0.
  let product = 1;
  // Loop through the array
  for (let i=0; i < x.length; i++) {
    // Do the maths. Product equals product times each element.
    product *= x[i]
  }
  // Out of the loop, return the total value of product.
  return product
};

// Call the function using [1,2,3,4] as the parameter x
// Expected output: 24

console.log(
  grow([1,2,3,4])
);
