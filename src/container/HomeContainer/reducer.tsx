import { AnyAction } from 'redux';

const initialState: { isLoading: boolean } = {
  isLoading: true,
};

export default function(state = initialState, action: AnyAction) {
  switch (action.type) {
    default:
      return state;
  }
}
