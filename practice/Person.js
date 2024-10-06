const _name = Symbol('name');
const _email = Symbol('email');

class Person {
    constructor( name,email){
        this[_name] = name
        this[_email]  = email
       
    }

    get name(){
        return this[_name]
    }

    set name(value){
        this[_name] = value
    }

    get email(){
        return this[_email]
    }

    set email(value){
         this[_email] = value
    }

    static isValid(obj){
        return obj >= 18
    }

    toString(){
        return `Name: ${this[_name]}, Email: ${this[_email]}`;
    }

    print(){
        console.log(`Name: ${this[_name]}, Email: ${this[_email]}`)
    }
}

module.exports = Person;