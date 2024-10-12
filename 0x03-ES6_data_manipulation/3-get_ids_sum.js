// export default
function getStudentIdsSum(students) {
  if (students.constructor !== [].constructor) { return 0; }
  return students.map((element) => element.id).reduce((a, b) => a + b);
}

const a = [
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 3, firstName: 'Serena', location: 'San Francisco' },
];

console.log(getStudentIdsSum(a));
