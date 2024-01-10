function cartesianProduct(setA, setB) {
  let productSet = [];
  for (let i = 0; i < setA.length; i++) {
    for (let j = 0; j < setB.length; j++) {
      productSet.push([setA[i], setB[j]]);
    }
  }
  return productSet;
}
console.log(cartesianProduct([1, 2], [3, 4, 5]));
// O(mn)
