const generateFibonacci = (n) => {
  let array = [0];
  if (n === 1) return array;
  array.push(1);
  for (let i = 2; i < n; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }
  return array;
};
console.log(generateFibonacci(5));
//O(n)

//RECURSIVE

function recursiveFibonacci(n) {
  if (n < 2) return n;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
//O(2^n)
