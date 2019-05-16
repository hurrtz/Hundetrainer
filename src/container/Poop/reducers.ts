import { AnyAction } from 'redux';
import uuidv4 from 'uuid/v4';

import { Poop } from 'container/Poop/types';
import {
  ADD_POOP,
  UPDATE_POOP,
  REMOVE_POOP,
  SET_POOP_TO_DETAILS,
  SET_POOP_TO_EDIT,
  MIGRATE_POOP,
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
      ...state.items.map(
        (poop: Poop): Poop =>
          poop.id === currentPoop.id
            ? { ...newPoop, id: currentPoop.id }
            : poop,
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
    items: [
      ...state.items.filter((poop): boolean => poop.id !== poopToDelete.id),
    ],
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

function migratePoops(state: State): State {
  const fixPoopProps = (_poop: Poop): Poop => {
    const poop = _poop;

    if (typeof poop.color === 'number') {
      switch (poop.color) {
        case 0:
          poop.color = 'LIGHT';
          break;

        case 1:
          poop.color = 'MEDIUM';
          break;

        case 2:
          poop.color = 'DARK';
          break;

        case 3:
          poop.color = 'BLACK';
          break;

        case 4:
          poop.color = 'OTHER';
          break;

        default:
      }
    }

    if (typeof poop.consistency === 'number') {
      switch (poop.consistency) {
        case 0:
          poop.consistency = 'LIQUID';
          break;

        case 1:
          poop.consistency = 'SOFT';
          break;

        case 2:
          poop.consistency = 'NORMAL';
          break;

        case 3:
          poop.consistency = 'HARD';
          break;

        default:
      }
    }

    if (typeof poop.quality === 'number') {
      switch (poop.quality) {
        case 0:
          poop.quality = 'GOOD';
          break;

        case 1:
          poop.quality = 'MEDIUM';
          break;

        case 2:
          poop.quality = 'BAD';
          break;

        default:
      }
    }

    return poop;
  };

  return {
    ...state,
    items: state.items.map(item => fixPoopProps(item)),
  };
}

export default function(state: State = initialState, action: AnyAction): State {
  switch (action.type) {
    case MIGRATE_POOP:
      return migratePoops(state);

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
