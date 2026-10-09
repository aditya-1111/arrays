function reverseFibonacci(n) {
  if (n === 0) return [];
  if (n === 1) return [0];

  const arr = [1, 0];

  for (let i = 2; i < n; i++) {
    const curr = arr.at(1) + arr.at(0);
    arr.unshift(curr);
  }

  return arr;
}

console.log(reverseFibonacci(5));
console.log(reverseFibonacci(4));
console.log(reverseFibonacci(10));
