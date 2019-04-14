import { NavigationScreenProp } from 'react-navigation';

import { State as PoopState } from 'container/Poop/reducers';
import { State as AddressBookState } from 'container/AddressBook/reducers';

export type TNavigation = NavigationScreenProp<any, any>;

export interface INavigation {
  navigation: TNavigation;
}

export interface RootState {
  Poop: PoopState;
  AddressBook: AddressBookState;
}
