import { AnyAction } from 'redux';
import uuidv4 from 'uuid/v4';

import { IAddressBookEntry } from 'container/AddressBook/types';
import {
  ADD_ADDRESS,
  UPDATE_ADDRESS,
  REMOVE_ADDRESS,
  SET_ADDRESS_TO_DETAILS,
  SET_ADDRESS_TO_EDIT,
} from './actions';

export interface State {
  addresses: IAddressBookEntry[];
  currentDetailsAddress: string | undefined;
  currentEditAddress: string | undefined;
  isLoading: boolean;
}

const initialState: State = {
  addresses: [],
  currentDetailsAddress: undefined,
  currentEditAddress: undefined,
  isLoading: true,
};

function setAddress(state: State, address: IAddressBookEntry) {
  return {
    ...state,
    addresses: [...state.addresses, { ...address, id: uuidv4() }],
  };
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
        address.id === currentAddress.id
          ? { ...newAddress, id: currentAddress.id }
          : address,
      ),
    ],
  };
}

function removeAddress(state: State, addressToDelete: IAddressBookEntry) {
  return {
    ...state,
    addresses: [
      ...state.addresses.filter(address => address.id !== addressToDelete.id),
    ],
  };
}

function setAddressToDetails({ state, id }: { state: State; id: string }) {
  return {
    ...state,
    currentDetailsAddress:
      typeof id === 'string' && id.length > 0 ? id : undefined,
  };
}

function setAddressToEdit({ state, id }: { state: State; id: string }) {
  return {
    ...state,
    currentEditAddress:
      typeof id === 'string' && id.length > 0 ? id : undefined,
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

    case SET_ADDRESS_TO_DETAILS:
      return setAddressToDetails({
        state,
        id: action.id,
      });

    case SET_ADDRESS_TO_EDIT:
      return setAddressToEdit({
        state,
        id: action.id,
      });

    default:
      return state;
  }
}
