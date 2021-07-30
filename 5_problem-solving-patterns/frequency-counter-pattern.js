/* 
this pattern uses objects or sets to collect values/frequencies of values
this can often avoid the need for nested loops or O(n^2) operations with arrays/strings 

Write a function called same, which accepts two arrays. The function should return true if every value in the 
array has it's corresponding values squared in the second array. The frequency of values must be the same 

ex. same([1,2,3], [4,1,9]) // true
    same([1,2,1], [4,4,1]) // false (must be same frequency)
*/

// naive approach O(n^2) quadratic time.
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2) // indexOf() is a loop
    if (correctIndex === -1) {
      console.log("false")
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  console.log("same() true");
  return true;
}

// same([1,2,3],[9,1,4]);


// Frequency counter approach O(n) Linear time.
function freq(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1, "freq counter 1");
  console.log(frequencyCounter2, "freq counter 2");
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true;
}

freq([1,2,3, 11, 2],[9,1,4,5, 4]);