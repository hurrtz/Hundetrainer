import { createSelector, Selector } from 'reselect';
import { Poop } from 'container/Poop/types';

const selectPoopState = (state: AppState): AppState['Poop'] => state.Poop;

const itemsSelector = createSelector(
  selectPoopState,
  (state): Poop[] => state.items || [],
);

const currentDetailSelector = createSelector(
  selectPoopState,
  (state): AppState['Poop']['currentDetailsPoop'] => state.currentDetailsPoop,
);

const currentEditSelector = createSelector(
  selectPoopState,
  (state): AppState['Poop']['currentEditPoop'] => state.currentEditPoop,
);

const itemByIdSelector = (id: string): Selector<AppState, Poop> =>
  createSelector(
    itemsSelector,
    (items): Poop => (items.filter((item): boolean => item.id === id) || [])[0],
  );

const currentDetailItemSelector = createSelector(
  [itemsSelector, currentDetailSelector],
  (items, detailId): Poop =>
    items.filter((item): boolean => item.id === detailId)[0],
);

const currentEditItemSelector = createSelector(
  [itemsSelector, currentEditSelector],
  (items, editId): Poop =>
    items.filter((item): boolean => item.id === editId)[0],
);

const itemsSortedByDateSelector = createSelector(
  itemsSelector,
  (items): Poop[] =>
    [...items].sort(
      (itemA: Poop, itemB: Poop): number => {
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

const itemsGroupedAndSortedByDateSelector = createSelector(
  itemsSortedByDateSelector,
  (itemsSortedByDate): { [date: string]: Poop[] } => {
    const poopsByDateMap = {};

    itemsSortedByDate.forEach(
      (poop): void => {
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
      },
    );

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
