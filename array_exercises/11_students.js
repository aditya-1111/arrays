function scoredAtLeast70(arr) {
  const names = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].marks >= 70) {
      names.push(arr[i].name);
    }
  }

  return names;
}

const students = [
  { name: "Anu", marks: 80 },
  { name: "Rahul", marks: 65 },
  { name: "Meera", marks: 91 },
  { name: "Vikram", marks: 72 },
];

console.log(scoredAtLeast70(students));
