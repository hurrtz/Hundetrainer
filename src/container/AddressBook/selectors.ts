import { createSelector, OutputSelector } from 'reselect';
import { AddressBookEntry, ADDRESS_TYPES } from 'container/AddressBook/types';

const selectAddressBookState = (state: AppState): AppState['AddressBook'] =>
  state.AddressBook;

const itemsSelector = createSelector(
  selectAddressBookState,
  (state): AddressBookEntry[] => state.addresses || [],
);

const itemsByTypeSelector = (
  type: ADDRESS_TYPES,
): OutputSelector<
  AppState,
  AddressBookEntry[],
  (res: AddressBookEntry[]) => AddressBookEntry[]
> =>
  createSelector(
    itemsSelector,
    (items): AddressBookEntry[] =>
      items.filter((item): boolean => item.type === type),
  );

const currentDetailSelector = createSelector(
  selectAddressBookState,
  (state): AddressBookEntry['id'] => state.currentDetailsAddress,
);

const currentEditSelector = createSelector(
  selectAddressBookState,
  (state): AddressBookEntry['id'] => state.currentEditAddress,
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

const itemByIdSelector = (
  id: string,
): OutputSelector<
  AppState,
  AddressBookEntry,
  (res: AddressBookEntry[]) => AddressBookEntry
> =>
  createSelector(
    itemsSelector,
    (items): AddressBookEntry =>
      (items.filter((item): boolean => item.id === id) || [])[0],
  );

export {
  selectAddressBookState,
  itemsSelector,
  itemByIdSelector,
  itemsByTypeSelector,
  currentDetailItemSelector,
  currentEditItemSelector,
};
