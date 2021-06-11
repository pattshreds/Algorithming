// 7 kyu Codewars

// Given an array of integers, remove the smallest value. Do not mutate the original array. If given an empty array, return an empty array.


const removeSmallest = (numbers) => {
  // Create copy so original array isn't changed.
  let numbersArr = [...numbers];
  // Find the smallest number.
  let num = Math.min(...numbersArr);
  // Get the index of the smallest number.
  let res = numbersArr.indexOf(num);
  // Splice the smallest number out.
  let newArr = numbersArr.splice(res, 1)
    if (numbersArr.length >= 1) {
      return numbersArr
    } else {
      return []
    }
};

// Call function with an array as the argument. (numbers param)
console.log(
  removeSmallest([4,7,18,9])
)
