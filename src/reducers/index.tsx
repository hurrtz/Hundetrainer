import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import Poops from 'container/Poop/reducer';

export default combineReducers({
  form: formReducer,
  Poops,
});
