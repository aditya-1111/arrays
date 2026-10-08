const students = [
  { name: "Anu", marks: 80 },
  { name: "Rahul", marks: 65 },
  { name: "Meera", marks: 91 },
];

// loop for names
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}

// names more than 70
for (let i = 0; i < students.length; i++) {
  if (students[i].marks > 70) {
    console.log(students[i].name);
  }
}