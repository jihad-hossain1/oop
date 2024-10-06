const _region = Symbol("region")
const _city = Symbol("city")
const _country = Symbol("country")
const _roadNo = Symbol("roadNo")
const _postalCode = Symbol("postalCode")
const _id  = Symbol("id")


class Contact {
    constructor({id, region, city, country, roadNo, postalCode }) {
        this[_id] = id
        this[_region] = region || ""
        this[_city] = city || ""
        this[_country] = country || ""
        this[_roadNo] = roadNo || ""
        this[_postalCode] = postalCode || ""
    }

    get id() {
        return this[_id]
    }

    get region() {
        return this[_region]
    }

    get city() {
        return this[_city]
    }

    get country() {
        return this[_country]
    }

    get roadNo() {
        return this[_roadNo]
    }

    get postalCode() {
        return this[_postalCode]
    }

    set region(region) {
        this[_region] = region
    }

    set city(city) {
        this[_city] = city
    }

    set country(country) {
        this[_country] = country
    }

    set roadNo(roadNo) {
        this[_roadNo] = roadNo
    }

    set postalCode(postalCode) {
        this[_postalCode] = postalCode
    }

    toString() {
        return `${this[_region]} ${this[_city]} ${this[_country]} ${this[_roadNo]} ${this[_postalCode]}`
    }
}


module.exports = Contact

