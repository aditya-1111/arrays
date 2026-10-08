function filterBelow(arr, threshold) {
  const filterArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < threshold) {
      filterArr.push(arr[i]);
    }
  }

  return filterArr;
}

console.log(filterBelow([6, 3, 4, 6, 8, 2, 4, 1, 6, 9], 6));
console.log(filterBelow([6, 4, 5, 3, 2], 5));
console.log(filterBelow([6, 4, 5, 3, 2], 10));
console.log(filterBelow([6, 4, 5, 3, 2], 2));