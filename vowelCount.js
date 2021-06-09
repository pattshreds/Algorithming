// 7kyu Codewars

// return the number of vowels in a given string.

const vowelCounter = (str) => {
  // search for and match vowels. This will push the vowels as individual strings into an array.
  let numOfVowels = str.match(/[aeiou]/gi)
  // return 0 if there are 0 vowels, else return the number of vowels found in str.match() by returning the length of the array created by .match().
  return numOfVowels == null ? 0 : numOfVowels.length
};

// Call the function with the string 'Hello'
// expected output: 2
console.log(
  vowelCounter('hello')
);
