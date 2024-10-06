const Employee = require("./Employee");


const _subjects = Symbol("subjects");


class Teacher extends Employee {
    constructor(id, name , subjects) {
        super(id, name);
        this[_subjects] = subjects;
    }

    get subjects() {
        return this[_subjects];
    }

    set subjects(value) {
        this[_subjects] = value;
    }

    toString() {
      return `${super.toString()}, Subjects: ${this[_subjects]}`
    }
}

module.exports = Teacher