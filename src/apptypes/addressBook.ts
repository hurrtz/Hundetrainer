export enum AddressTypes {
  DIET,
  MEDICINE,
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
  type: AddressTypes;
  picture: string;
  address: IAddress;
  contact: IContact;
  additionalInformation: string;
}
