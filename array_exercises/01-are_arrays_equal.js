function areLengthsEqual(arr1, arr2) {
  return arr1.length === arr2.length;
}

function isObject(arr) {

}

function areEqual(arr1, arr2) {
  if (!areLengthsEqual(arr1, arr2)) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] === 'object') {
      return areEqual(arr1[i], arr2[i])
    }
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

console.log(areEqual([1, 2, 3], [1, 2, 4]));
console.log(areEqual([1, 2, 3, [1, 2, [3, [4], [4]]]], [1, 2, 3, [1, 2, [3, [4], [4]]]]));
console.log(areEqual([[1, 2, [3]]], [[1, 2, [3]]]));
console.log(areEqual([[1, 2, [3]]], [[1, 2, [3]]]));
console.log(areEqual([[[[2]]]], [[[[3]]]]));
console.log(areEqual([[[[2, 4, [5]]]]], [[[[2, 4, [5]]]]]));
console.log(areEqual([[1, 2, [3]]], [[1, 2, [2, 3]]]));

