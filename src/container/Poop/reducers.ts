import { AnyAction } from 'redux';
import uuidv4 from 'uuid/v4';

import { Poop } from 'container/Poop/types';
import {
  ADD_POOP,
  UPDATE_POOP,
  REMOVE_POOP,
  SET_POOP_TO_DETAILS,
  SET_POOP_TO_EDIT,
} from './actions';

export interface State {
  items: Poop[];
  currentDetailsPoop: string | undefined;
  currentEditPoop: string | undefined;
  isLoading: boolean;
}

const initialState: State = {
  items: [],
  currentDetailsPoop: undefined,
  currentEditPoop: undefined,
  isLoading: true,
};

function setPoop({ state, poop }: { state: State; poop: Poop }): State {
  return { ...state, items: [...state.items, { ...poop, id: uuidv4() }] };
}

function updatePoop({
  state,
  currentPoop,
  newPoop,
}: {
  state: State;
  currentPoop: Poop;
  newPoop: Poop;
}): State {
  return {
    ...state,
    items: [
      ...state.items.map((poop: Poop) =>
        poop.id === currentPoop.id ? { ...newPoop, id: currentPoop.id } : poop,
      ),
    ],
  };
}

function removePoop({
  state,
  poop: poopToDelete,
}: {
  state: State;
  poop: Poop;
}): State {
  return {
    ...state,
    items: [...state.items.filter(poop => poop.id !== poopToDelete.id)],
  };
}

function setPoopToDetails({ state, id }: { state: State; id: string }): State {
  return {
    ...state,
    currentDetailsPoop:
      typeof id === 'string' && id.length > 0 ? id : undefined,
  };
}

function setPoopToEdit({ state, id }: { state: State; id: string }): State {
  return {
    ...state,
    currentEditPoop: typeof id === 'string' && id.length > 0 ? id : undefined,
  };
}

export default function(state: State = initialState, action: AnyAction): State {
  switch (action.type) {
    case ADD_POOP:
      return setPoop({ state, poop: action.poop });

    case UPDATE_POOP:
      return updatePoop({
        state,
        currentPoop: action.currentPoop,
        newPoop: action.newPoop,
      });

    case REMOVE_POOP:
      return removePoop({ state, poop: action.poop });

    case SET_POOP_TO_DETAILS:
      return setPoopToDetails({
        state,
        id: action.id,
      });

    case SET_POOP_TO_EDIT:
      return setPoopToEdit({
        state,
        id: action.id,
      });

    default:
      return state;
  }
}
