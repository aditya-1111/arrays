function areLengthsEqual(arr1, arr2) {
  return arr1.length === arr2.length;
}

function areArrays(arr1, arr2) {
  return (Array.isArray(arr1) && Array.isArray(arr2));
}

function areEqual(arr1, arr2) {
  if (!areLengthsEqual(arr1, arr2)) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (areArrays(arr1, i)) {
      if (!areEqual(arr1[i], arr2[i])) return false;
    }
    else if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

console.log(areEqual([1, 2, 3], [1, 2, []]));

// console.log(areEqual([1, 2, 3, "aditya"], [1, 2, 3, "aditya"]));
// console.log(areEqual([1, 2, 3, [1, 2, [3, [4], [4]]]], [1, 2, 3, [1, 2, [3, [4], [5]]]]));
// console.log(areEqual([[1, 2, [3]]], [[1, 2, [3]]]));
// console.log(areEqual([[1, 2, [3]]], [[1, 2, [3]]]));
// console.log(areEqual([[[[2]]]], [[[[3]]]]));
// console.log(areEqual([[[[2, 4, [5]]]]], [[[[2, 4, [5]]]]]));
// console.log(areEqual([[1, 2, [2, 3]]], [[1, 2, [2, 3]]]));