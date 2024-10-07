const _id = Symbol("id")
const _name = Symbol("name")
const _passmark = Symbol("passmark")
const _subjects = Symbol("subjects")



class Exam {
    constructor({id, name, passmark, subjects}) {
        this[_id] = id
        this[_name] = name
        this[_passmark] = passmark || 33
        this[_subjects] = subjects || []
    }


    get id() {
        return this[_id]
    }

    get name() {
        return this[_name]
    }

    get passmark() {
        return this[_passmark]
    }

    get subjects() {
        return this[_subjects]
    }


    set name(name) {
        this[_name] = name
    }

    set passmark(passmark) {
        this[_passmark] = passmark
    }

    set addSubject(subject) {
        this[_subjects].push(subject)
    }


    toString(){
        return `ID: ${this[_id]}, Name: ${this[_name]}, Passmark: ${this[_passmark]}, Subjects: ${this[_subjects]}`
    }


}




module.exports = Exam