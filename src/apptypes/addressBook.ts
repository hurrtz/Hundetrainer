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
  zip: string;
  city: string;
  country: string;
}

export interface IContact {
  telephone: string;
  mobile: string;
  email: string;
  homepage: string;
}

export interface IAddressBookEntry {
  id: string;
  name: string;
  type: ADDRESS_TYPES;
  picture?: string;
  address: IAddress;
  contact: IContact;
  additionalInformation: string;
}
