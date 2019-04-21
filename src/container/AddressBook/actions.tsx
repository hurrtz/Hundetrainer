import { IAddressBookEntry } from 'apptypes/addressBook';

const NS = 'AddressBook';

export const ADD_ADDRESS = `${NS}: Adding new address`;
export const UPDATE_ADDRESS = `${NS}: Updating address`;
export const REMOVE_ADDRESS = `${NS}: Removing address`;
export const SET_ADDRESS_TO_DETAILS = `${NS}: Setting address for detail view`;
export const SET_ADDRESS_TO_EDIT = `${NS}: Setting Address for editing`;

interface IUpdateAddress {
  currentAddress: IAddressBookEntry;
  newAddress: IAddressBookEntry;
}

export function addAddress(address: IAddressBookEntry) {
  return {
    type: ADD_ADDRESS,
    address,
  };
}

export function updateAddress({ currentAddress, newAddress }: IUpdateAddress) {
  return {
    type: UPDATE_ADDRESS,
    currentAddress,
    newAddress,
  };
}

export function removeAddress(address: IAddressBookEntry) {
  return {
    type: REMOVE_ADDRESS,
    address,
  };
}

export function setAddressToDetails({ id }: { id: string }) {
  return {
    type: SET_ADDRESS_TO_DETAILS,
    id,
  };
}

export function setAddressToEdit({ id }: { id: string }) {
  return {
    type: SET_ADDRESS_TO_EDIT,
    id,
  };
}
