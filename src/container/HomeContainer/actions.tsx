export const TYPES = {
  LIST_IS_LOADING: 'LIST_IS_LOADING',
  FETCH_LIST_SUCCESS: 'FETCH_LIST_SUCCESS',
};

export const listIsLoading = (bool: boolean) => ({
  type: TYPES.LIST_IS_LOADING,
  isLoading: bool,
});

export const fetchListSuccess = (list: Object) => ({
  type: TYPES.FETCH_LIST_SUCCESS,
  list,
});

export const fetchList = (url: string) => (dispatch: Function) => {
  dispatch(fetchListSuccess(url));
  dispatch(listIsLoading(false));
};
