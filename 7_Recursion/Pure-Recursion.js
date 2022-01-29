/*
Pure Recursion - The function itself is pure recursion, This means no helper functions!
*/

function CollectOdds(arr) {
  let newArr = []; // This will reset on each recursive call

  if (arr.length === 0) {
    // Base case
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    // Push element into newArr if odd
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOdds(arr.slice(1))); // // We call our recursive function again with our newly sliced array. This is important!

  // After we hit our basecase we will return a concating array of odd numbers because of the step right above.
  return newArr;
}

collectOdds([1, 2, 3, 4, 5, 6]);
/* 
[1].concat(collectOdds([2,3,4,5])) 
  [].concat(collectOdds([3,4,5]))
    [3].concat(collectOdds([4,5]))
      [].concat(collectOdds([5]))
        [5].concat(collectOdds([]))
        [5]
      [].concat[5] = [5]
    [3].concat[5] == [3,5]
  [].concat[3,5]  == [3,5]
[1].concat[3,5] == [1,3,5]
*/
