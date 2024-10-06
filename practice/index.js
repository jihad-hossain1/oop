const Person = require("./Person");
const Teacher = require('./Teacher');
const Student = require("./Student");


const person1 = new Person('Jihad hossain','jihad@gmail.com');

const teacher1 = new Teacher("abc","abc@gmail.com",["physics","math"],"32000");

console.log(`Teacher Name: ${teacher1.name}, Salary: ${teacher1.salary}, subjects: ${teacher1.subjects}`)

// console.log(person1.email)
