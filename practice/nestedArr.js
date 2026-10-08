const points = [
  [10, 20],
  [30, 40],
  [50, 60],
];

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// printing row by row
let str = "";
for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    // console.log(matrix[row][col]);
    str += ` ${matrix[row][col]},`;
  }
  str += `\n`;

}
console.log(str);



// sum of every number in matrix
// let sum = 0;
// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     sum += matrix[i][j];
//   }
// }

// console.log(sum);
