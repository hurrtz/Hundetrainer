import { AnyAction } from 'redux';

import { TYPES } from './actions';

type TList = [string?];

const initialState: { list: TList; isLoading: boolean } = {
  list: [],
  isLoading: true,
};

export default function(state = initialState, action: AnyAction) {
  switch (action.type) {
    case TYPES.FETCH_LIST_SUCCESS:
      return {
        ...state,
        list: action.list,
      };

    case TYPES.LIST_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    default:
      return state;
  }
}
