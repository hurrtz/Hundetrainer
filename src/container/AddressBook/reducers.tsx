import { AnyAction } from 'redux';

import { IAddressBookEntry } from 'apptypes/addressBook';
import { ADD_ADDRESS, UPDATE_ADDRESS, REMOVE_ADDRESS } from './actions';

export interface State {
  addresses: IAddressBookEntry[];
  isLoading: boolean;
}

const initialState: State = {
  addresses: [],
  isLoading: true,
};

function setAddress(state: State, address: IAddressBookEntry) {
  return { ...state, addresses: [...state.addresses, address] };
}

function updateAddress(
  state: State,
  currentAddress: IAddressBookEntry,
  newAddress: IAddressBookEntry,
) {
  return {
    ...state,
    addresses: [
      ...state.addresses.map((address: IAddressBookEntry) =>
        address.name === currentAddress.name ? newAddress : address,
      ),
    ],
  };
}

function removeAddress(state: State, addressToDelete: IAddressBookEntry) {
  return {
    ...state,
    addresses: [
      ...state.addresses.filter(
        address => address.name !== addressToDelete.name,
      ),
    ],
  };
}

export default function(state: State = initialState, action: AnyAction): State {
  switch (action.type) {
    case ADD_ADDRESS:
      return setAddress(state, action.address);

    case UPDATE_ADDRESS:
      return updateAddress(state, action.currentAddress, action.newAddress);

    case REMOVE_ADDRESS:
      return removeAddress(state, action.address);

    default:
      return state;
  }
}
