import { IAddressBookEntry } from 'apptypes/addressBook';

const NS = 'AddressBook';

export const ADD_ADDRESS = `${NS}: Adding new address`;
export const UPDATE_ADDRESS = `${NS}: Updating address`;
export const REMOVE_ADDRESS = `${NS}: Removing address`;

interface IUpdateAddress {
  currentAddress: IAddressBookEntry;
  newAddress: IAddressBookEntry;
}

export function addPoop(address: IAddressBookEntry) {
  return {
    type: ADD_ADDRESS,
    address,
  };
}

export function updatePoop({ currentAddress, newAddress }: IUpdateAddress) {
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