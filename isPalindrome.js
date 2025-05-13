const x = 12321;

const isPalindrome = (x) => {
    if (x < 0) {
        return false;
    } // Negative numbers aren't palindromes
    let og = x;
    let reversed = 0;
    while (og > 0) {
        const lastDigit = og % 10; // Get last digit of x
        reversed = reversed * 10 + lastDigit; // Build reversed number
        og = Math.floor(og / 10); // Remove last digit
    }
    return x === reversed; // Check if reversed is equal to x
};

isPalindrome(x);
