function fibonacci(n) {
  if (n === 0) return [];
  if (n === 1) return [0];

  const arr = [0, 1];

  for (let i = 2; i < n; i++) {
    const curr = arr[i - 1] + arr[i - 2];
    arr.push(curr);
  }

  return arr;
}

console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(2));