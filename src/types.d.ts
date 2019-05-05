import { NavigationScreenProp } from 'react-navigation';

import { State as PoopState } from 'container/Poop/reducers';
import { State as AddressBookState } from 'container/AddressBook/reducers';

declare global {
  export type Navigation = NavigationScreenProp<any, any>;

  export interface AppState {
    Poop: PoopState;
    AddressBook: AddressBookState;
  }
}
