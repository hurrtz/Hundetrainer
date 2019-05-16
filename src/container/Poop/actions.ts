import { AnyAction } from 'redux';
import { Poop } from 'container/Poop/types';

const NS = 'POOPS';

export const ADD_POOP = `${NS}: Adding new poop`;
export const UPDATE_POOP = `${NS}: Updating poop`;
export const REMOVE_POOP = `${NS}: Removing poop`;
export const SET_POOP_TO_DETAILS = `${NS}: Setting poop for detail view`;
export const SET_POOP_TO_EDIT = `${NS}: Setting poop for editing`;
export const MIGRATE_POOP = `${NS}: Migrate poop to current structure`;

interface UpdatePoops {
  currentPoop: Poop;
  newPoop: Poop;
}

export function migratePoop(): AnyAction {
  return {
    type: MIGRATE_POOP,
  };
}

export function addPoop(poop: Poop): AnyAction {
  return {
    type: ADD_POOP,
    poop,
  };
}

export function updatePoop({ currentPoop, newPoop }: UpdatePoops): AnyAction {
  return {
    type: UPDATE_POOP,
    currentPoop,
    newPoop,
  };
}

export function removePoop(poop: Poop): AnyAction {
  return {
    type: REMOVE_POOP,
    poop,
  };
}

export function setPoopToDetails({ id }: { id: string }): AnyAction {
  return {
    type: SET_POOP_TO_DETAILS,
    id,
  };
}

export function setPoopToEdit({ id }: { id: string }): AnyAction {
  return {
    type: SET_POOP_TO_EDIT,
    id,
  };
}
