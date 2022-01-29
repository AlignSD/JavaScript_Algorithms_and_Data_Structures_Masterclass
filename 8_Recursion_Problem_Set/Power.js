//power(2,0) 1
// power(2,2) 4
//power(2,4) 16
let result;
function power(base, exponent) {
  if (exponent === 0) return 1; // Base case
  return base * power(base, exponent - 1); // here were recursivly multiplying base * base until our exponent argument is 0
}
console.log(power(9, 14));
