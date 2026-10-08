function selectOdds(arr) {
  const oddArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      oddArr.push(arr[i]);
    }
  }

  return oddArr;
}

console.log(selectOdds([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(selectOdds([5, 6, 3, 7, 3, 2, 5, 8, 9, 0, 1]));
