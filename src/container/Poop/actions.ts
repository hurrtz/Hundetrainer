import { IPoop } from 'apptypes/poop';

const NS = 'POOPS';

export const ADD_POOP = `${NS}: Adding new poop`;
export const UPDATE_POOP = `${NS}: Updating poop`;
export const REMOVE_POOP = `${NS}: Removing poop`;
export const SET_POOP_TO_DETAILS = `${NS}: Setting poop for detail view`;
export const SET_POOP_TO_EDIT = `${NS}: Setting poop for editing`;

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

export function setPoopToDetails({ id }: { id: string }) {
  return {
    type: SET_POOP_TO_DETAILS,
    id,
  };
}

export function setPoopToEdit({ id }: { id: string }) {
  return {
    type: SET_POOP_TO_EDIT,
    id,
  };
}
