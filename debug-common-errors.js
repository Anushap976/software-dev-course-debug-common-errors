/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

console.log("Welcome to the bootcamp"); 

// What’s Wrong?
//Syntax error missing double quote and closing parenthsis and semi colon

// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

let numbers = [2, 4, 8];
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}

// What’s Wrong?
//option 1 -numbers array holds an string eight not feasible for performing arthimetic operations and results Not a Number(NaN), so fixed the data in line 36
//option 2 - use the if condition to ensure only numeric values are multipled and handle non numeric values accordingly as handled in below code.
numbers = [2, 4, "eight"];
for (let i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] === 'number') {  // Check if the element is a number
    let doubled = numbers[i] * 2;
    console.log(doubled);
  } else {
    console.log(`Invalid number: ${numbers[i]}`);  // Handle non-numeric values
  }
}


// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;  // Supposed to indicate num is NOT prime
    }
  }
  return true; // Supposed to indicate num IS prime
 }

 console.log(isPrime(7)); // Expected true but gets false
 console.log(isPrime(8)); //this should be false

// What’s Wrong?
//line 53 should return false instead, so indicating that the number is divisible by i and hence not a prime number.
//also updated logical condition on line 67 as true accordingly.
//above program excutes correctly after fixing it and tested with combination of numbers to test it as well line 61 is validation test.
