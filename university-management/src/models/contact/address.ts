import { AddressParams, AddressSchema } from "@/schema";

const _region = Symbol("region");
const _city = Symbol("city");
const _country = Symbol("country");
const _roadNo = Symbol("roadNo");
const _postalCode = Symbol("postalCode");
const _id = Symbol("id");

export class Address {
  private [_id]: string | number;
  private [_region]: string;
  private [_city]: string;
  private [_country]: string;
  private [_roadNo]: string;
  private [_postalCode]: string;

  constructor(params: AddressParams) {
    // Validate the input parameters with the Zod schema
    const parsedData = AddressSchema.parse(params);

    this[_id] = parsedData.id;
    this[_region] = parsedData.region;
    this[_city] = parsedData.city;
    this[_country] = parsedData.country;
    this[_roadNo] = parsedData.roadNo;
    this[_postalCode] = parsedData.postalCode;
  }
}
