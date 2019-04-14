import { combineReducers } from 'redux';

import Poop from 'container/Poop/reducers';
import AddressBook from 'container/AddressBook/reducers';

export default combineReducers({
  Poop,
  AddressBook,
});
