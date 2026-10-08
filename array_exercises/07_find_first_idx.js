function findIndex(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) return i;
  }
  return -1;
}

console.log(findIndex(["apple", "cake", "tea", "coffee", "tea"], "tea"))
console.log(findIndex([1, 2, 3, 4, 5], 6));
console.log(findIndex([1, 2, 3, 4, 5], 3));
console.log(findIndex([1, 2, 3, 4, 5, 9], 9));