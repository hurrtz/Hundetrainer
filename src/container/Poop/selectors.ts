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

const itemsGroupedAndSortedByDateSelector = createSelector(
  itemsSortedByDateSelector,
  itemsSortedByDate => {
    const poopsByDateMap = {};

    itemsSortedByDate.forEach(poop => {
      const poopDate = new Date(poop.date);
      const dateKey = new Date(
        poopDate.getFullYear(),
        poopDate.getMonth(),
        poopDate.getDate(),
        0,
        0,
        0,
        0,
      ).toISOString();

      if (!poopsByDateMap[dateKey]) {
        poopsByDateMap[dateKey] = [];
      }

      poopsByDateMap[dateKey].push(poop);
    });

    return poopsByDateMap;
  },
);

export {
  selectPoopState,
  itemsSelector,
  itemsSortedByDateSelector,
  itemsGroupedAndSortedByDateSelector,
};
