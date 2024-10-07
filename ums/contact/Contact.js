

const _id = Symbol("id")
const _email = Symbol("email")
const _phone = Symbol("phone")
const _alternativePhone = Symbol("alternativePhone")
const _address = Symbol("address")


class Contact {
    constructor({id, email, phone, alternativePhone, address}) {
        this[_id] = id
        this[_email] = email || ""
        this[_phone] = phone || ""
        this[_alternativePhone] = alternativePhone || ""
        this[_address] = address || ""
    }

    get id() {
        return this[_id]
    }

    get email() {
        return this[_email]
    }

    get phone() {
        return this[_phone]
    }

    get alternativePhone() {
        return this[_alternativePhone]
    }

    get address() {
        return this[_address]
    }


    set email(email) {
        this[_email] = email
    }

    set phone(phone) {
        this[_phone] = phone
    }

    set alternativePhone(alternativePhone) {
        this[_alternativePhone] = alternativePhone
    }

    set address(address) {
        this[_address] = address
    }

    toString(){
        return `
        ID:  ${this[_id]}
        Email: ${this[_email]}
        Phone: ${this[_phone]}
        Alternative Phone: ${this[_alternativePhone]}
        Address: ${this[_address]}
        `
    }
}

module.exports = Contact





