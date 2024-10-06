const UniPerson = require("./UniPerson");


const _eployeeID = Symbol("eployeeID");
const _salary = Symbol("salary");


class Employee extends UniPerson {
    constructor(id, name, salary) {
        super(id, name);
        this[_eployeeID] = id;
        this[_salary] = salary;
    }

    get eployeeID() {
        return this[_eployeeID];
    }

    get salary() {
        return this[_salary];
    }

    set salary(value) {
        this[_salary] = value;
    }

    toString() {
        // super.toString();
        return (`${super.toString()}, Employee ID: ${this[_eployeeID]}, Salary: ${this[_salary]}`)
    }
}

module.exports = Employee