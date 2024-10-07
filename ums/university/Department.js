const _id = Symbol("id")
const _name = Symbol("name")
const _subjects = Symbol("subjects")
const _dean = Symbol("dean")
const _teachers = Symbol("teachers")


class Department {
    constructor({id, name, subjects, dean,teachers}) {
        this[_id] = id
        this[_name] = name
        this[_subjects] = subjects || []
        this[_dean] = dean || null
        this[_teachers] = teachers || []
    }

    get id() {
        return this[_id]
    }

    get name() {
        return this[_name]
    }

    get subjects() {
        return this[_subjects]
    }
    set subjects(value) {
        this[_subjects] = value
    }

    get dean() {
        return this[_dean]
    }

    get teachers() {    
        return this[_teachers]
    }


    set name(name) {
        this[_name] = name
    }

    set addSubject(subject) {
        this[_subjects].push(subject)
    }   

    set dean(dean) {
        this[_dean] = dean
    }

    set addTeacher(teacher) {
        this[_teachers].push(teacher)
    }


    toString(){
        return `ID: ${this[_id]}, Name: ${this[_name]}, Subjects: ${this[_subjects]}, Dean: ${this[_dean]}, Teachers: ${this[_teachers]}`
    }


}


module.exports = Department