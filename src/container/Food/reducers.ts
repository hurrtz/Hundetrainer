import { combineReducers } from 'redux';

import OptionsReducers from 'container/Food/Options/reducers';

export default combineReducers({
  Options: OptionsReducers,
});
