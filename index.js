// Write your code here
const num1 = 31;
const num2 = 2;
const multiply = num1 * num2;
console.log(multiply);

// function random() {
//   return Math.floor(Math.random() * 100) + 1; // Generate a random integer between 1 and 100 (inclusive)
// }
// console.log(random());
let random = Math.ceil(Math.random() * Number.MAX_SAFE_INTEGER);



  let num3 = 13;
  let num4 = 9;
  let mod = num3 % num4;
console.log(mod);
// Function to find the maximum value in a set of numbers
// function max() {
//   const numbers = [20, 5, 6, 4, 16]
//   return Math.max(...numbers);
// }
// console.log(max());

let numbers = [10, 20, 5];
let max = Math.max(...numbers)
console.log(max)