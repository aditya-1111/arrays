function mapLengths(words) {
  const letterArr = [];

  for (let i = 0; i < words.length; i++) {
    letterArr.push(words[i].length);
  }

  return letterArr;
}

console.log(mapLengths(["apple", "cat", "Four"]))
console.log(mapLengths(["I", "hi", "hello", "wow"]))
console.log(mapLengths(["nice", "", "omega"]))