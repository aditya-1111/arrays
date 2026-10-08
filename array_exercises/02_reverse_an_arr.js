function reverse(arr) {
  const revArr = [];

  for (let i = 0; i < arr.length; i++) {
    revArr[i] = arr[arr.length - 1 - i];
  }

  return revArr;
}

const arr = [1, 2, 3, 4, 5, 6];
const revArr = reverse(arr);

console.log(revArr);
