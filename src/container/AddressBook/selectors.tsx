import { createSelector } from 'reselect';

const selectAddressBookState = (state: AppState) => state.AddressBook;

const itemsSelector = createSelector(
  selectAddressBookState,
  state => state.addresses || [],
);

const currentDetailSelector = createSelector(
  selectAddressBookState,
  state => state.currentDetailsAddress,
);

const currentEditSelector = createSelector(
  selectAddressBookState,
  state => state.currentEditAddress,
);

const currentDetailItemSelector = createSelector(
  [itemsSelector, currentDetailSelector],
  (items, detailId) => items.filter(item => item.id === detailId)[0],
);

const currentEditItemSelector = createSelector(
  [itemsSelector, currentEditSelector],
  (items, editId) => items.filter(item => item.id === editId)[0],
);

const itemByIdSelector = (id: string) =>
  createSelector(
    itemsSelector,
    items => items.filter(item => item.id === id),
  );

export {
  selectAddressBookState,
  itemsSelector,
  itemByIdSelector,
  currentDetailItemSelector,
  currentEditItemSelector,
};
