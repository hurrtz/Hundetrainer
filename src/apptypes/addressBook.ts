export enum ADDRESS_TYPES {
  DIET,
  HEALTH,
  DOG_PARK,
  TRAINING,
  EXCERCISE,
  DOG_SITTING,
  DOG_PENSION,
  OTHER,
}

export interface IAddress {
  street: string;
  zip: number;
  place: string;
  country: string;
}

export interface IContact {
  telephone: number;
  mobile: number;
  fax: number;
  email: string;
  homepage: string;
}

export interface IAddressBookEntry {
  name: string;
  type: ADDRESS_TYPES;
  picture: string;
  address: IAddress;
  contact: IContact;
  additionalInformation: string;
}
