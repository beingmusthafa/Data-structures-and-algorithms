function powerOfTwo(n) {
  if (n < 1) return false;
  let divisor = n;
  do {
    divisor /= 2;
  } while (divisor > 1);
  if (divisor === 1) return true;
  return false;
}
console.log(powerOfTwo(16));
//O(log n)
