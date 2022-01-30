function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return target;
    }
  }
  return -1;
}

console.log(linearSearch([10, 22, 36, 47, 5], 10));
