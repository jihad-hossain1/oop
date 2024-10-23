import { EmployeeParams, EmployeeSchema } from "@/schema";
import UniPerson from "./uniperson";

const _eployeeID = Symbol("eployeeID");
const _salary = Symbol("salary");

class Employee extends UniPerson {
    private [_eployeeID]: string | number;
    private [_salary]: number;

    constructor(params: EmployeeParams) {
        const parseData = EmployeeSchema.safeParse(params);

        if (!parseData.success) {
            throw parseData.error.errors;
        }

        const { id, name, salary } = parseData.data;

        super({ id, name, account: "", department: "" });
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
        return `${super.toString()}, Employee ID: ${
            this[_eployeeID]
        }, Salary: ${this[_salary]}`;
    }
}

export default Employee;
