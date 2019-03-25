import { AnyAction } from 'redux';

import { IPoop } from 'apptypes/poop';
import { IS_LOADING, SET } from './actions';

export interface State {
  poops: IPoop[];
  isLoading: boolean;
}

const initialState: State = {
  poops: [],
  isLoading: true,
};

export default function(state: State = initialState, action: AnyAction): State {
  switch (action.type) {
    case SET:
      return {
        ...state,
        poops: action.poops as IPoop[],
      };

    case IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading as boolean,
      };

    default:
      return state;
  }
}
