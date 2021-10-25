const newStudents = [];
const students = [
    {id: 001, name: 'Jahid Hasan'},
    {id: 002, name: 'Ayub Hasan'},
    {id: 003, name: 'Sahidul Islam'},
    {id: 004, name: 'Jubayer Hossen'}
]

const name = students.map( s=> s.name);
console.log(name);
 
const ids = students.map( s=> s.id);
console.log(ids);

const bigger = students.filter(s=> s.id>3);
console.log(bigger);