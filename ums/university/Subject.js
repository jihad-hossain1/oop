const _id = Symbol("id")
const _name = Symbol("name")
const _credit = Symbol("credit")

class Subject {
    constructor({id, name, credit}) {
        this[_id] = id
        this[_name] = name
        this[_credit] = credit || 0
    }


    get id() {
        return this[_id]
    }

    get name() {
        return this[_name]
    }

    get credit() {
        return this[_credit]
    }


    set name(name) {    
        this[_name] = name
    }

    set credit(credit) {
        this[_credit] = credit
    }

    toString(){
        return `ID: ${this[_id]}, Name: ${this[_name]}, Credit: ${this[_credit]}`
    }

}


module.exports = Subject

