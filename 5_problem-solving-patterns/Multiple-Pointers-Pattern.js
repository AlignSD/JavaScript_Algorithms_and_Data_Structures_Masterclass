/*
  Write a function called sumZero which accepts a sorted array of integers. 
  The function should find the first pair where the sum is 0. 
  Return an array that includes both values that sum to zero or undefined if a pair does not exst.

  sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
  sumZero([-2,0,1,3]) // undefined
  sumZero([1,2,3]) // undefined
*/

// My version before watching video
const sumZero = (array) => {
  // setup a pointer for 0 and a right pointer that starts at the end of the array
  let left = 0;
  let right = array.length - 1;

  while (right != left) {
    if (array[right] + array[left] > 0) {
      right -= 1;
    } else if (array[right] + array[left] < 0) {
      left += 1;
    } else if (array[right] + array[left] === 0) {
      return console.log(array[right], array[left]);
    }
  }
};
sumZero([-4, -2, 1, 2, 3, 3]); //
