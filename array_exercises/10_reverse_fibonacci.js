function reverseFibonacci(n) {
  if (n === 0) return [0];

  const fiboArr = [];
  let curr = 0;
  let next = 1;

  for (let i = 0; i < n; i++) {
    fiboArr.unshift(curr);

    const temp = curr;
    curr = next;
    next += temp;
  }

  return fiboArr;
}

function fibo(n) {
  if (n === 1 || n === 0) return n;

  return fibo(n - 1) + fibo(n - 2);
}

function revFibonacci(n) {
  const fiboArr = [];

  for (let i = n - 1; i >= 0; i--) {
    fiboArr.push(fibo(i));
  }

  return fiboArr;
}

console.log(revFibonacci(6));
console.log(revFibonacci(4));
console.log(revFibonacci(10));
