import { UniPersonParams, UniPersonSchema } from "@/schema";
import Person from "./person";

const _department = Symbol("department");
const _account = Symbol("account");

class UniPerson extends Person {

  private [_department]: string | null;
  private [_account]: string | null;

  constructor(params : UniPersonParams) {
    const parseData = UniPersonSchema.safeParse(params);

    if (!parseData.success) {
      throw parseData.error.errors;
    }

    const { id, name } = parseData.data;

    super({
        id,
        name,
        blood: "",
        contact: ""
    });
    this[_department] = null;
    this[_account] = null;
  }

  get department(): string | null {
    return this[_department];
  }

  get account(): string | null {
    return this[_account];
  }

  set department(value: string | null) {
    this[_department] = value;
  }

  set account(value: string | null) {
    this[_account] = value;
  }

  toString(): string {
    return `${super.toString()}, Department: ${this[_department]}, Account: ${this[_account]}`;
  }
}

export default UniPerson;
