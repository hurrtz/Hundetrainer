export type ADDRESS_TYPES =
  | 'DIET'
  | 'HEALTH'
  | 'DOG_PARK'
  | 'TRAINING'
  | 'EXCERCISE'
  | 'DOG_SITTING'
  | 'DOG_PENSION'
  | 'OTHER';

export interface Address {
  street: string;
  zip: string;
  city: string;
  country: string;
}

export interface Contact {
  telephone: string;
  mobile: string;
  email: string;
  homepage: string;
}

export interface AddressBookEntry {
  id: string;
  name: string;
  type: ADDRESS_TYPES;
  picture?: string;
  address: Address;
  contact: Contact;
  additionalInformation: string;
}
