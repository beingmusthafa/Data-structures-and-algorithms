function isPrime(n) {
  if (n < 2) return false;
  const root = Math.sqrt(n);
  for (let i = 2; i <= root; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(5));
//O(log n)
