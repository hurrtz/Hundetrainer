import { createSelector } from 'reselect';

import { RootState } from 'apptypes/base';

const selectPoopState = (state: RootState) => state.Poop;

const itemsSelector = createSelector(
  selectPoopState,
  state => state.items,
);

export { selectPoopState, itemsSelector };
