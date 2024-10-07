
const {Guardian,Student,Teacher}= require('./person')

const {Contact,Address} = require('./contact')

const {Department,Subject} = require('./university')


/**
 * Guardian ID: 1,
 */

const guardian = new Guardian(1,"Mr. Jihad", "Software Engineer",120000);

guardian.blood = "O+";
guardian.contact = new Contact({id: 1,email: "jihad@gmail.com", phone: "123456789"});

guardian.contact.address = new Address({
    id: 1, 
    region: "Cairo", 
    city: "Cairo", 
    country: "Egypt", 
    roadNo: "123", 
    postalCode: "123456"
});


/**
 * Student ID: 1,
 */

const student = new Student(1,"Mr. Ahmed", "Software Engineer",120000);

student.blood = "O+";

student.contact = new Contact({id: 2,email: "ahmed@gmail.com", phone: "123456789", alternativePhone: guardian.contact.phone, address: student.guardian.address});

/**
 * Department ID: 1,
 */

const department = new Department({
    id: 1, 
    name: "Computer Science", 
});

student.department = department;

department.addSubject = [

    new Subject({id: 1, name: "C++", credit: 3}),
    new Subject({id: 2, name: "Python", credit: 3}),
    new Subject({id: 3, name: "Java", credit: 3}),

]


/**
 * Teacher ID: 1,
 */

const dean = new Teacher(1,"Mr. Mohamed", "Software Engineer",120000);
department.dean = dean;

console.log(department.toString())



