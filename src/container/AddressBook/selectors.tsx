import { createSelector } from 'reselect';

import { RootState } from 'apptypes/base';

const selectAddressBookState = (state: RootState) => state.AddressBook;

const itemsSelector = createSelector(
  selectAddressBookState,
  state => state.addresses || [],
);

export { selectAddressBookState, itemsSelector };
