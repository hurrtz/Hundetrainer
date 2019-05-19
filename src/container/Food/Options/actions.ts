import { AnyAction } from 'redux';
import { FoodOption } from 'container/Food/Options/types';

const NS = 'Food';

export const CREATE_OPTION = `${NS} – create new option`;
export const UPDATE_OPTION = `${NS} – update option`;
export const DELETE_OPTION = `${NS} – delete option`;
export const SET_OPTION_TO_DETAILS = `${NS} – setting option for detail view`;
export const SET_OPTION_TO_EDIT = `${NS} – setting option for editing`;

export function createOption(option: FoodOption): AnyAction {
  return {
    type: CREATE_OPTION,
    option,
  };
}

export function updateOption(
  currentOption: FoodOption,
  newOption: FoodOption,
): AnyAction {
  return {
    type: UPDATE_OPTION,
    currentOption,
    newOption,
  };
}

export function removeOption(option: FoodOption): AnyAction {
  return {
    type: DELETE_OPTION,
    option,
  };
}

export function setOptionToDetails(id: string): AnyAction {
  return {
    type: SET_OPTION_TO_DETAILS,
    id,
  };
}

export function setOptionToEdit(id: string): AnyAction {
  return {
    type: SET_OPTION_TO_EDIT,
    id,
  };
}
