function countUniqueValues(arr) {
  var left = 0;

  for (var right = 1; right < arr.length; right++) {
    if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
    }
  }
  console.log(left + 1);
  return left + 1;
}
countUniqueValues([1, 1, 1, 2, 2, 3, 4, 5, 6, 7, 8]);
