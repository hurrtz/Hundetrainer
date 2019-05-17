import { createSelector } from 'reselect';
import { FoodOption } from 'container/Food/Options/types';

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
  itemsSortedByDateSelector,
  currentDetailItemSelector,
  currentEditItemSelector,
};
