import { AddressParams, AddressSchema } from "@/schema";

const _region = Symbol("region");
const _city = Symbol("city");
const _country = Symbol("country");
const _roadNo = Symbol("roadNo");
const _postalCode = Symbol("postalCode");
const _id = Symbol("id");

 class Address {
  private [_id]: string | number;
  private [_region]: string;
  private [_city]: string;
  private [_country]: string;
  private [_roadNo]: string;
  private [_postalCode]: string;

  constructor(params: AddressParams) {
    // Validate the input parameters with the Zod schema
    const parsedData = AddressSchema.safeParse(params);

    if (!parsedData.success) {
        throw parsedData.error.errors
    }

    const { id, region, city, country, roadNo, postalCode } = parsedData.data

    this[_id] = id;
    this[_region] = region;
    this[_city] = city;
    this[_country] = country;
    this[_roadNo] = roadNo;
    this[_postalCode] = postalCode;
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

export default Address