function findLastIndex(arr, el) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === el) return i;
  }

  return -1;
}

console.log(findLastIndex(["apple", "cake", "tea", "coffee", "tea"], "tea"))
console.log(findLastIndex([1, 2, 3, 4, 5], 6));
console.log(findLastIndex([1, 2, 3, 4, 5], 3));
console.log(findLastIndex([1, 2, 3, 4, 5, 9, 9], 9));