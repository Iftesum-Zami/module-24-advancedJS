const student = [
    {id:21, name: "omor sunny"},
    {id:22, name: "tom"},
    {id:23, name: "jerry"},
    {id:24, name: "doraemon"}
]

// for loop > name property > new array push

const names = student.map(s => s.name);
const ids = student.map(s => s.id);
const bigger = student.filter(s => s.id > 22);
const biggerFirst = student.find(s => s.id > 22);

console.log(names);
console.log(ids);
console.log(bigger);
console.log(biggerFirst);