import { createSelector } from 'reselect';

const selectPoopState = (state: AppState) => state.Poop;

const itemsSelector = createSelector(
  selectPoopState,
  state => state.items || [],
);

const currentDetailSelector = createSelector(
  selectPoopState,
  state => state.currentDetailsPoop,
);

const currentEditSelector = createSelector(
  selectPoopState,
  state => state.currentEditPoop,
);

const itemByIdSelector = (id: string) =>
  createSelector(
    itemsSelector,
    items => items.filter(item => item.id === id),
  );

const currentDetailItemSelector = createSelector(
  [itemsSelector, currentDetailSelector],
  (items, detailId) => items.filter(item => item.id === detailId)[0],
);

const currentEditItemSelector = createSelector(
  [itemsSelector, currentEditSelector],
  (items, editId) => items.filter(item => item.id === editId)[0],
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
  itemByIdSelector,
  itemsSortedByDateSelector,
  itemsGroupedAndSortedByDateSelector,
  currentDetailItemSelector,
  currentEditItemSelector,
};
