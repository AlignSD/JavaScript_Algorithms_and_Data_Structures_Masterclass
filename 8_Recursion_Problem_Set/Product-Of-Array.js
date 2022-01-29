/* Write a function called productOfArray which takes in an array of numbers and returns the product of them all */

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.splice(1)); // return the product of the 0 index and recursively splice the 0 index till we get to our base case
}
console.log(productOfArray([1, 4, 5]));
