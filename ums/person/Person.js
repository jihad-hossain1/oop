const _id = Symbol("id");
const _name = Symbol("name")
const _blood = Symbol("blood")
const _contact = Symbol("contact")


class Person {
    constructor(id, name) {
        this[_id] = id
        this[_name] = name
        this[_blood] = null
        this[_contact] = null
    }

    get id() {
        return this[_id]
    }

    get name() {
        return this[_name]
    }

    set name(value) {
        this[_name] = value
    }

    get blood() {
        return this[_blood]
    }

    get contact() {
        return this[_contact]
    }

    set blood(value) {
        this[_blood] = value
    }

    set contact(value) {
        this[_contact] = value
    }

    toString() {
        return `Id: ${this[_id]}, Name: ${this[_name]}, Blood: ${this[_blood]}, Contact: ${this[_contact]}`
    }
}

module.exports = Person