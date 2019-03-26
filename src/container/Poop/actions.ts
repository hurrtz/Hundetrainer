import { Dispatch } from 'redux';
import { IPoop } from 'apptypes/poop';

const NS = 'POOPS';

export const IS_LOADING = `${NS}: Loading`;
export const FETCH = `${NS}: Fetching`;
export const SET_POOPS = `${NS}: Storing poops in state`;
export const ADD_POOP = `${NS}: Adding a new poop`;
export const SET_POOP_IN_STATE = `${NS}: Storing poop in state`;
export const SET_POOP_IN_DB = `${NS}: Storing poop in DB`;
export const REMOVE_POOP_FROM_STATE = `${NS}: Removing poop from state`;
export const REMOVE_POOP_FROM_DB = `${NS}: Removing poop from DB`;

export function isLoading(bool: boolean) {
  return {
    type: IS_LOADING,
    isLoading: bool,
  };
}

export function fetch() {
  return {
    type: FETCH,
  };
}

export function setPoops(poops: IPoop[]) {
  return {
    type: SET_POOPS,
    poops,
  };
}

export function addPoop(poop: IPoop) {
  return (dispatch: Dispatch) => {
    dispatch(setPoopInState(poop));
    dispatch(setPoopInDB(poop));
  };
}

export function setPoopInState(poop: IPoop) {
  return {
    type: SET_POOP_IN_STATE,
    poop,
  };
}

export function setPoopInDB(poop: IPoop) {
  return {
    type: SET_POOP_IN_DB,
    poop,
  };
}

export function removePoop(poop: IPoop) {
  return (dispatch: Dispatch) => {
    dispatch(removePoopFromState(poop));
    dispatch(removePoopFromDB(poop));
  };
}

export function removePoopFromState(poop: IPoop) {
  return {
    type: REMOVE_POOP_FROM_STATE,
    poop,
  };
}

export function removePoopFromDB(poop: IPoop) {
  return {
    type: REMOVE_POOP_FROM_DB,
    poop,
  };
}

export function load() {
  return (dispatch: Dispatch) => {
    dispatch(isLoading(true));
    dispatch(fetch());
  };
}
