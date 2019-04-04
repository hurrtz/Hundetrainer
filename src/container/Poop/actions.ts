import { IPoop } from 'apptypes/poop';

const NS = 'POOPS';

export const ADD_POOP = `${NS}: Adding new poop`;
export const UPDATE_POOP = `${NS}: Updating poop`;
export const REMOVE_POOP = `${NS}: Removing poop`;

interface IUpdatePoops {
  currentPoop: IPoop;
  newPoop: IPoop;
}

export function addPoop(poop: IPoop) {
  return {
    type: ADD_POOP,
    poop,
  };
}

export function updatePoop({ currentPoop, newPoop }: IUpdatePoops) {
  return {
    type: UPDATE_POOP,
    currentPoop,
    newPoop,
  };
}

export function removePoop(poop: IPoop) {
  return {
    type: REMOVE_POOP,
    poop,
  };
}
