/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Returns a digit from a number at a specified index
 */
export function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

/**
 * Returns the length of the number with the most digits
 */
export function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, nums[i].toString().length);
    }
    return maxDigits;
}

/*To visualize sorting algorithms, you often need a set of data to sort. Generating random numbers between specified limits creates varied datasets, which can help demonstrate how the algorithm performs with different inputs.*/
/*Suppose you're visualizing how a sorting algorithm like Quick Sort or Merge Sort works. You'll need an array of random numbers to show the sorting process dynamically.
getRandomNumber(5, 10);

Generate a Random Number:

Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive). Let's assume it generates 0.587.
Calculate the Range:

The range is calculated as max - min, which is 10 - 5 = 5.
Scale the Random Number:

Multiply the random number by the range: 0.587 * 5 = 2.935.
Shift to the Minimum Value:

Add the min value to the scaled random number: 2.935 + 5 = 7.935.
Floor the Result:

Apply Math.floor to get the largest integer less than or equal to the result: Math.floor(7.935) = 7
The function returns 7, which is a random integer between 5 (inclusive) and 10 (exclusive).



getDigit(12345, 2);

Absolute Value:

Math.abs(num) takes the absolute value of num to ensure the function works with negative numbers. In this case, num is already positive, so it remains 12345.
Calculate 10 to the Power of i:

Math.pow(10, i) calculates 10 raised to the power of i. Here, i is 2, so Math.pow(10, 2) computes 100.
Divide by 10^i:

Math.abs(num) / Math.pow(10, i) divides the absolute value of num by 100. So, 12345 / 100 equals 123.45.
Floor the Result:

Math.floor(123.45) rounds down 123.45 to the nearest integer, which is 123.
Modulo 10:

123 % 10 computes the remainder when 123 is divided by 10. The result is 3.
Result
The function returns 3, which is the digit at the 2nd position (zero-based index) from the right of the number 12345.


mostDigits([123, 45, 6789, 2, 45678]);

for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, nums[i].toString().length);
}
First Iteration (i = 0):

nums[0] is 123.
nums[0].toString().length converts 123 to the string "123" and gets its length, which is 3.
maxDigits = Math.max(0, 3) updates maxDigits to 3.
Second Iteration (i = 1):

nums[1] is 45.
nums[1].toString().length converts 45 to the string "45" and gets its length, which is 2.
maxDigits = Math.max(3, 2) keeps maxDigits as 3 because 3 is greater than 2.
Third Iteration (i = 2):

nums[2] is 6789.
nums[2].toString().length converts 6789 to the string "6789" and gets its length, which is 4.
maxDigits = Math.max(3, 4) updates maxDigits to 4.
Fourth Iteration (i = 3):

nums[3] is 2.
nums[3].toString().length converts 2 to the string "2" and gets its length, which is 1.
maxDigits = Math.max(4, 1) keeps maxDigits as 4 because 4 is greater than 1.
Fifth Iteration (i = 4):

nums[4] is 45678.
nums[4].toString().length converts 45678 to the string "45678" and gets its length, which is 5.
maxDigits = Math.max(4, 5) updates maxDigits to 5

After the loop completes, the function returns maxDigits, which is 5.*/
