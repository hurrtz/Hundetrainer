import { Dispatch } from 'redux';
import { IPoop } from 'apptypes/poop';

const NS = 'POOPS';

export const IS_LOADING = `${NS}: Loading`;
export const FETCH = `${NS}: Fetching`;
export const SET = `${NS}: Storing list in state`;

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

export function set(poops: IPoop[]) {
  return {
    type: SET,
    poops,
  };
}

export function load() {
  return (dispatch: Dispatch) => {
    dispatch(isLoading(true));
    dispatch(fetch());
  };
}
