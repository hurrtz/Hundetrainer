import { createSelector } from 'reselect';

import { RootState } from 'apptypes/base';

const selectPoopState = (state: RootState) => state.Poop;

const itemsSelector = createSelector(
  selectPoopState,
  state => state.items || [],
);

const itemsSortedByDateSelector = createSelector(
  itemsSelector,
  items =>
    [...items].sort((itemA, itemB) => {
      if (itemA.date > itemB.date) {
        return -1;
      }

      if (itemB.date > itemA.date) {
        return 1;
      }

      return 0;
    }),
);

export { selectPoopState, itemsSelector, itemsSortedByDateSelector };
