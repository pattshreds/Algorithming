// Leetcode #1672 Richest Customer Wealth

// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

 

// Example 1:

// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.

// Solution:


const maximumWealth = accounts => {
    // Define new Arr to hold sums of each nested array.
    let wealthArr = [];
    // Loop through the array to acces index of each nested array.
    accounts.forEach(index => {
        // Define a variable to hold sum of each nested array.
      let wealth = 0;
      // Look through the nested arrays
      for(let i=0; i<index.length; i++) {
        // Add each index of each nested array and push the result into the "wealth" variable.
        wealth += index[i];
      }
      // Push the sum of each nested array into the new holding array
      wealthArr.push(wealth)
    });
    // Return the largest sum in the new array which represents the largest sum of each nested array. Had to use spread operator with Math.max
    // in order for the Math method to access each array element as an individual integer.
    return Math.max(...wealthArr)
  };

  maximumWealth([[1,5],[7,3],[3,5]]);

  // Output: 10