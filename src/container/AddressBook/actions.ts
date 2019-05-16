import { AnyAction } from 'redux';
import { AddressBookEntry } from 'container/AddressBook/types';

const NS = 'AddressBook';

export const ADD_ADDRESS = `${NS}: Adding new address`;
export const UPDATE_ADDRESS = `${NS}: Updating address`;
export const REMOVE_ADDRESS = `${NS}: Removing address`;
export const SET_ADDRESS_TO_DETAILS = `${NS}: Setting address for detail view`;
export const SET_ADDRESS_TO_EDIT = `${NS}: Setting Address for editing`;
export const MIGRATE_ADDRESS_BOOK = `${NS}: Migrate address book to current structure`;

interface UpdateAddress {
  currentAddress: AddressBookEntry;
  newAddress: AddressBookEntry;
}

export function migrateAddressBook(): AnyAction {
  return {
    type: MIGRATE_ADDRESS_BOOK,
  };
}

export function addAddress(address: AddressBookEntry): AnyAction {
  return {
    type: ADD_ADDRESS,
    address,
  };
}

export function updateAddress({
  currentAddress,
  newAddress,
}: UpdateAddress): AnyAction {
  return {
    type: UPDATE_ADDRESS,
    currentAddress,
    newAddress,
  };
}

export function removeAddress(address: AddressBookEntry): AnyAction {
  return {
    type: REMOVE_ADDRESS,
    address,
  };
}

export function setAddressToDetails({ id }: { id: string }): AnyAction {
  return {
    type: SET_ADDRESS_TO_DETAILS,
    id,
  };
}

export function setAddressToEdit({ id }: { id: string }): AnyAction {
  return {
    type: SET_ADDRESS_TO_EDIT,
    id,
  };
}
