import { combineReducers } from 'redux';

import Poop from 'container/Poop/reducers';
import AddressBook from 'container/AddressBook/reducers';
import FoodReducers from 'container/Food/reducers';

export default combineReducers({
  Poop,
  AddressBook,
  Food: FoodReducers,
});
