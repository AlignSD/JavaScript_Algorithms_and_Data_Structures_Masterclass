/* this pattern uses objects or sets to collect values/frequencies of values

this can often avoid the need for nested loops or O(n^2) operations with arrays/strings */

/* Write a function called same, which accepts two arrays. The function should return true if every value in the 
array has it's corresponding values squared in the second array. The frequency of values must be the same 

ex. same([1,2,3], [4,1,9]) // true
    same([1,2,1], [4,4,1]) // false (must be same frequency)
*/

// naive approach
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2) 
    if (correctIndex === -1) {
      console.log("false")
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  console.log("true");
  return true;
}

same([1,2,3],[9,1,4]);