/* 
Find and count the number of times a substring occurs
 - loop over the longer string
 - loop over the shorter string
 - if the characters do match, keep going
 - if you complete the inner loop and find a match, increment the counter
 - return the counter
*/

function naiveSearch(str, sub) {
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < sub.length; j++) {
      console.log(str[i + j], sub[j]);
      if (sub[j] !== str[i + j]) {
        break;
      } else if (j === sub.length - 1) {
        counter++;
        console.log("found one");
      }
    }
  }
  return console.log(counter);
}

naiveSearch("ambamgmabmagamg", "amg");
