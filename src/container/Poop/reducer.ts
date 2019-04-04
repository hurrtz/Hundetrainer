import { AnyAction } from 'redux';

import { IPoop } from 'apptypes/poop';
import { ADD_POOP, UPDATE_POOP, REMOVE_POOP } from './actions';

export interface State {
  items: IPoop[];
  isLoading: boolean;
}

const initialState: State = {
  items: [],
  isLoading: true,
};

function setPoop(state: State, poop: IPoop) {
  return { ...state, items: [...state.items, poop] };
}

function updatePoop(state: State, currentPoop: IPoop, newPoop: IPoop) {
  return {
    ...state,
    items: [
      ...state.items.map((poop: IPoop) =>
        poop.date === currentPoop.date ? newPoop : poop,
      ),
    ],
  };
}

function removePoop(state: State, poopToDelete: IPoop) {
  return {
    ...state,
    items: [...state.items.filter(poop => poop.date !== poopToDelete.date)],
  };
}

export default function(state: State = initialState, action: AnyAction): State {
  switch (action.type) {
    case ADD_POOP:
      return setPoop(state, action.poop);

    case UPDATE_POOP:
      return updatePoop(state, action.currentPoop, action.newPoop);

    case REMOVE_POOP:
      return removePoop(state, action.poop);

    default:
      return state;
  }
}
