import { AnyAction } from 'redux';
import uuidv4 from 'uuid/v4';

import { FoodOption } from 'container/Food/Options/types';
import {
  CREATE_OPTION,
  UPDATE_OPTION,
  DELETE_OPTION,
  SET_OPTION_TO_DETAILS,
  SET_OPTION_TO_EDIT,
} from './actions';

export interface State {
  items: FoodOption[];
  currentDetailsOption: string | undefined;
  currentEditOption: string | undefined;
  isLoading: boolean;
}

const initialState: State = {
  items: [],
  currentDetailsOption: undefined,
  currentEditOption: undefined,
  isLoading: true,
};

function createOption(state: State, option: FoodOption): State {
  return { ...state, items: [...state.items, { ...option, id: uuidv4() }] };
}

function updateOption(
  state: State,
  currentOption: FoodOption,
  newOption: FoodOption,
): State {
  return {
    ...state,
    items: [
      ...state.items.map(
        (option: FoodOption): FoodOption =>
          option.id === currentOption.id
            ? { ...newOption, id: currentOption.id }
            : option,
      ),
    ],
  };
}

function removeOption(state: State, optionToDelete: FoodOption): State {
  return {
    ...state,
    items: [
      ...state.items.filter(
        (option): boolean => option.id !== optionToDelete.id,
      ),
    ],
  };
}

function setOptionToDetails(state: State, id: string): State {
  return {
    ...state,
    currentDetailsOption:
      typeof id === 'string' && id.length > 0 ? id : undefined,
  };
}

function setOptionToEdit(state: State, id: string): State {
  return {
    ...state,
    currentEditOption: typeof id === 'string' && id.length > 0 ? id : undefined,
  };
}

export default function(state: State = initialState, action: AnyAction): State {
  switch (action.type) {
    case CREATE_OPTION:
      return createOption(state, action.option);

    case UPDATE_OPTION:
      return updateOption(state, action.currentOption, action.newOption);

    case DELETE_OPTION:
      return removeOption(state, action.option);

    case SET_OPTION_TO_DETAILS:
      return setOptionToDetails(state, action.id);

    case SET_OPTION_TO_EDIT:
      return setOptionToEdit(state, action.id);

    default:
      return state;
  }
}
