/*
Write a recursive function called "fib" which accepts a number and returns the nth number in the fibonacci sequence.
Recall that the fibonacci sequenceis the sequence of whole numbers 1, 1, 2, 3, 5, 8.... which starts with 1 and 1 and
where every number thereafter is equal to the sum of the previous two numbers.
*/

function fib(num) {
  if (num <= 0) return console.log("This won't work bud");
  if (num <= 2) return 1; // 1, 1, 2
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(1));
