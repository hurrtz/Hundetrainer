import { createSelector } from 'reselect';

import { FoodOption } from 'container/Food/Options/types';
import { AddressBookEntry } from 'container/AddressBook/types';
import { itemsSelector as addressBookItems } from 'container/AddressBook/selectors';

const selectFoodOptionsState = (state: AppState): AppState['Food']['Options'] =>
  state.Food.Options;

const itemsSelector = createSelector(
  selectFoodOptionsState,
  (state): FoodOption[] => state.items || [],
);

const currentDetailSelector = createSelector(
  selectFoodOptionsState,
  state => state.currentDetailsOption,
);

const currentEditSelector = createSelector(
  selectFoodOptionsState,
  state => state.currentEditOption,
);

const currentDetailItemSelector = createSelector(
  [itemsSelector, currentDetailSelector],
  (items, detailId): FoodOption =>
    items.filter((item): boolean => item.id === detailId)[0],
);

const currentEditItemSelector = createSelector(
  [itemsSelector, currentEditSelector],
  (items, editId): FoodOption =>
    items.filter((item): boolean => item.id === editId)[0],
);

const currentVendorSelector = createSelector(
  [currentDetailSelector, itemsSelector, addressBookItems],
  (detailId, items, addresses): AddressBookEntry => {
    const currentFoodOption = items.filter(
      (item): boolean => item.id === detailId,
    )[0];

    if (currentFoodOption.vendorId) {
      return addresses.find(
        address => address.id === currentFoodOption.vendorId,
      );
    }

    return undefined;
  },
);

const itemsSortedByDateSelector = createSelector(
  itemsSelector,
  (items): FoodOption[] =>
    [...items].sort(
      (itemA: FoodOption, itemB: FoodOption): number => {
        if (itemA.date > itemB.date) {
          return -1;
        }

        if (itemB.date > itemA.date) {
          return 1;
        }

        return 0;
      },
    ),
);

export {
  selectFoodOptionsState,
  itemsSelector,
  currentVendorSelector,
  itemsSortedByDateSelector,
  currentDetailItemSelector,
  currentEditItemSelector,
};
