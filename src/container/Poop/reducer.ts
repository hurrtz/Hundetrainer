import { AnyAction } from 'redux';

import { IPoop } from 'apptypes/poop';
import {
  IS_LOADING,
  SET_POOPS,
  SET_POOP_IN_STATE,
  REMOVE_POOP_FROM_STATE,
} from './actions';

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

function removePoop(state: State, poopToDelete: IPoop) {
  return {
    ...state,
    items: [...state.items.filter(poop => poop.date !== poopToDelete.date)],
  };
}

export default function(state: State = initialState, action: AnyAction): State {
  switch (action.type) {
    case SET_POOPS:
      return {
        ...state,
        items: action.poops as IPoop[],
      };

    case SET_POOP_IN_STATE:
      return setPoop(state, action.poop);

    case REMOVE_POOP_FROM_STATE:
      return removePoop(state, action.poop);

    case IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading as boolean,
      };

    default:
      return state;
  }
}
