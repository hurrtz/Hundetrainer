import { createSelector, Selector } from 'reselect';
import { AddressBookEntry } from 'container/AddressBook/types';

const selectAddressBookState = (state: AppState): AppState['AddressBook'] =>
  state.AddressBook;

const itemsSelector = createSelector(
  selectAddressBookState,
  (state): AddressBookEntry[] => state.addresses || [],
);

const currentDetailSelector = createSelector(
  selectAddressBookState,
  (state): AppState['AddressBook']['currentDetailsAddress'] =>
    state.currentDetailsAddress,
);

const currentEditSelector = createSelector(
  selectAddressBookState,
  (state): AppState['AddressBook']['currentEditAddress'] =>
    state.currentEditAddress,
);

const currentDetailItemSelector = createSelector(
  [itemsSelector, currentDetailSelector],
  (items, detailId): AddressBookEntry =>
    items.filter((item): boolean => item.id === detailId)[0],
);

const currentEditItemSelector = createSelector(
  [itemsSelector, currentEditSelector],
  (items, editId): AddressBookEntry =>
    items.filter((item): boolean => item.id === editId)[0],
);

const itemByIdSelector = (id: string): Selector<AppState, AddressBookEntry> =>
  createSelector(
    itemsSelector,
    (items): AddressBookEntry =>
      (items.filter((item): boolean => item.id === id) || [])[0],
  );

export {
  selectAddressBookState,
  itemsSelector,
  itemByIdSelector,
  currentDetailItemSelector,
  currentEditItemSelector,
};
