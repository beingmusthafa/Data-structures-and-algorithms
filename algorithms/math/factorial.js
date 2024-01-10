function factorial(n) {
  let result = 1;
  for (let i = n; i >= 1; i--) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));
//O(n)

function recursiveFactorial(n) {
  if (n === 0) return 1;
  return n * recursiveFactorial(n - 1);
}
console.log(recursiveFactorial(0));
//O(n)
