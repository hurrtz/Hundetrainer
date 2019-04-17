import { AnyAction } from 'redux';
import uuidv4 from 'uuid/v4';

import { IPoop, COLOR, CONSISTENCY, QUALITY } from 'apptypes/poop';
import {
  ADD_POOP,
  UPDATE_POOP,
  REMOVE_POOP,
  UPDATE_POOPS_TO_HAVE_IDS,
} from './actions';

export interface State {
  items: IPoop[];
  isLoading: boolean;
}

export const COLORS = [
  {
    title: 'hell',
    value: COLOR.LIGHT,
  },
  {
    title: 'normal',
    value: COLOR.MEDIUM,
  },
  {
    title: 'dunkel',
    value: COLOR.DARK,
  },
  {
    title: 'schwarz',
    value: COLOR.BLACK,
  },
  {
    title: 'andere Farbe',
    value: COLOR.OTHER,
  },
];

export const CONSISTENCIES = [
  {
    title: 'flüssig',
    value: CONSISTENCY.LIQUID,
  },
  {
    title: 'weich',
    value: CONSISTENCY.SOFT,
  },
  {
    title: 'normal',
    value: CONSISTENCY.NORMAL,
  },
  {
    title: 'hart',
    value: CONSISTENCY.HARD,
  },
];

export const QUALITIES = [
  {
    title: 'gut',
    value: QUALITY.GOOD,
  },
  {
    title: 'mäßig',
    value: QUALITY.MEDIUM,
  },
  {
    title: 'schlecht',
    value: QUALITY.BAD,
  },
];

const initialState: State = {
  items: [],
  isLoading: true,
};

function setPoop(state: State, poop: IPoop) {
  return { ...state, items: [...state.items, { ...poop, id: uuidv4() }] };
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

function updatePoopsToHaveIds(state: State) {
  const poops = state.items.map(poop => {
    if (poop.id === undefined) {
      return { ...poop, id: uuidv4() };
    }

    return poop;
  });

  return {
    ...state,
    items: poops,
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

    case UPDATE_POOPS_TO_HAVE_IDS:
      return updatePoopsToHaveIds(state);

    default:
      return state;
  }
}
