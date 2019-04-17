import { AnyAction } from 'redux';
import uuidv4 from 'uuid/v4';

import {
  IAddressBookEntry,
  ADDRESS_TYPES as TYPES,
} from 'apptypes/addressBook';
import { ADD_ADDRESS, UPDATE_ADDRESS, REMOVE_ADDRESS } from './actions';

export interface State {
  addresses: IAddressBookEntry[];
  isLoading: boolean;
}

const initialState: State = {
  addresses: [],
  isLoading: true,
};

export const ADDRESS_TYPES = [
  {
    title: 'Ernährung',
    value: TYPES.DIET,
  },
  {
    title: 'Gesundheit',
    value: TYPES.HEALTH,
  },
  {
    title: 'Training',
    value: TYPES.TRAINING,
  },
  {
    title: 'Auslauf',
    value: TYPES.EXCERCISE,
  },
  {
    title: 'Hundeauslaufgebiet',
    value: TYPES.DOG_PARK,
  },
  {
    title: 'Hundebetreuung',
    value: TYPES.DOG_SITTING,
  },
  {
    title: 'Hunde-Pension',
    value: TYPES.DOG_PENSION,
  },
  {
    title: 'sonstige',
    value: TYPES.OTHER,
  },
];

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
