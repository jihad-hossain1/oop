import { GuardianParams, GuardianSchema } from "@/schema";
import Person from "./person";



const _profession = Symbol("profession");
const _income = Symbol("income");



class Guardian extends Person {

    private [_profession]: string;
    private [_income]: number;

    constructor(params: GuardianParams) {
        const parseData = GuardianSchema.safeParse(params);

        if (!parseData.success) {
            throw parseData.error.errors;
        }

        const { id, name, profession, income } = parseData.data;

        super({ id, name, blood: "", contact: "" });
        this[_profession] = profession;
        this[_income] = income;
    }

    get profession() {
        return this[_profession];
    }

    get income() {
        return this[_income];
    }

    set profession(value) {
        this[_profession] = value;
    }

    set income(value) {
        this[_income] = value;
    }

    toString() {
        return (`${super.toString()}, Profession: ${this[_profession]}, Income: ${this[_income]}`)
    }
}

export default Guardian