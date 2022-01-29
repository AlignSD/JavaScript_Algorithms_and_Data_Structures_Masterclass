/* 
with helper method recursion we have two functions 
  - main outer function
  - inside helper function
*/

// let result = [] could set the variable globally but this is sloppy

function collectOdds(nums) {
  let result = []; // this will reset every time collect odds is called

  function helper(helperInput) {
    if (!helperInput.length) return; // base case

    if (helperInput[0] % 2 !== 0) {
      // if element at index 0 is odd push that to our result array
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1)); // slice 1 element off the beginning of the array if the number is even
  }

  helper(nums); // pass our nums argument down into our helper function for recursion

  return console.log(result); // return the results after we reach a length of 0 on our array
}

collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]);
