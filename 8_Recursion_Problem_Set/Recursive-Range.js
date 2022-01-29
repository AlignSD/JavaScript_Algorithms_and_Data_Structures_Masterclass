/* 
Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function. 
*/

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1); // Kind of confusing since you would think to add up from 0.
}

console.log(recursiveRange(6));
