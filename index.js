// Write your code here
const num1 = 31;
const num2 = 2;
const multiply = num1 * num2;
console.log(multiply);

function random() {
  return Math.floor(Math.random() * 100) + 1; // Generate a random integer between 1 and 100 (inclusive)
}
console.log(random());

function mod(num3, num4) {
  return num3 % num4;
}
console.log(mod(13, 9));
// Function to find the maximum value in a set of numbers
function max() {
  const numbers = [20, 5, 6, 4, 16]
  if (!numbers || numbers.length === 0) {
    return undefined; // Handle empty array or no arguments
  }
  return Math.max(...numbers); // Efficiently find the maximum using spread operator(...)
}
console.log(max());