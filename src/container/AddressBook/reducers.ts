import { AnyAction } from 'redux';
import uuidv4 from 'uuid/v4';

import { AddressBookEntry } from 'container/AddressBook/types';
import {
  ADD_ADDRESS,
  UPDATE_ADDRESS,
  REMOVE_ADDRESS,
  SET_ADDRESS_TO_DETAILS,
  SET_ADDRESS_TO_EDIT,
  MIGRATE_ADDRESS_BOOK,
} from './actions';

export interface State {
  addresses: AddressBookEntry[];
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

function setAddress(state: State, address: AddressBookEntry): State {
  return {
    ...state,
    addresses: [...state.addresses, { ...address, id: uuidv4() }],
  };
}

function updateAddress(
  state: State,
  currentAddress: AddressBookEntry,
  newAddress: AddressBookEntry,
): State {
  return {
    ...state,
    addresses: [
      ...state.addresses.map(
        (address: AddressBookEntry): AddressBookEntry =>
          address.id === currentAddress.id
            ? { ...newAddress, id: currentAddress.id }
            : address,
      ),
    ],
  };
}

function removeAddress(state: State, addressToDelete: AddressBookEntry): State {
  return {
    ...state,
    addresses: [
      ...state.addresses.filter(
        (address: AddressBookEntry): boolean =>
          address.id !== addressToDelete.id,
      ),
    ],
  };
}

function setAddressToDetails({
  state,
  id,
}: {
  state: State;
  id: string;
}): State {
  return {
    ...state,
    currentDetailsAddress:
      typeof id === 'string' && id.length > 0 ? id : undefined,
  };
}

function setAddressToEdit({ state, id }: { state: State; id: string }): State {
  return {
    ...state,
    currentEditAddress:
      typeof id === 'string' && id.length > 0 ? id : undefined,
  };
}

function migrateAddressBook(state: State): State {
  const fixAddressProps = (_address: AddressBookEntry): AddressBookEntry => {
    const address = _address;

    if (typeof address.type === 'number') {
      switch (address.type) {
        case 0:
          address.type = 'DIET';
          break;

        case 1:
          address.type = 'HEALTH';
          break;

        case 2:
          address.type = 'DOG_PARK';
          break;

        case 3:
          address.type = 'TRAINING';
          break;

        case 4:
          address.type = 'EXCERCISE';
          break;

        case 5:
          address.type = 'DOG_SITTING';
          break;

        case 6:
          address.type = 'DOG_PENSION';
          break;

        case 7:
          address.type = 'OTHER';
          break;

        default:
      }
    }

    return address;
  };

  return {
    ...state,
    addresses: state.addresses.map(item => fixAddressProps(item)),
  };
}

export default function(state: State = initialState, action: AnyAction): State {
  switch (action.type) {
    case MIGRATE_ADDRESS_BOOK:
      return migrateAddressBook(state);

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
